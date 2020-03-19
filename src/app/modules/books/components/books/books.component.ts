import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

// services
import { BooksService } from '../../services';

// rxjs
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  startWith,
  switchMap,
  takeUntil,
  takeWhile,
  tap
} from 'rxjs/operators';
import { BehaviorSubject, of, Subject } from 'rxjs';

// interfaces
import { IBook } from '../../interfaces';

// models
import { ScrollData } from '../../models';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  providers: [ BooksService ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent implements OnInit, OnDestroy {
  public form: FormGroup = this.buildForm();
  public books$: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>(null);

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private service: BooksService,
              private fb: FormBuilder) {}

  public ngOnInit(): void { this.initListener(); }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public onScroll(data: ScrollData): void {
    of(true)
      .pipe(
        takeWhile(() => data.size < this.service.total),
        filter(() => data.index === (data.size - 5)),
        tap(() => this.setPage(this.form.value.page + 1)),
        switchMap(() => this.service.getBooks(this.form.value)),
        takeUntil(this.destroy$),
      ).subscribe((books) => this.setBooks(books, this.books$.getValue()));
  }

  private setPage = (page: number): void => this.form.patchValue({ page: page });

  private setBooks(books: IBook[], store: IBook[] = []): void {
    this.books$.next([...store,...books]);
  }

  private initListener(): void {
    this.form.get('subject').valueChanges
      .pipe(
        startWith(''),
        debounceTime(250),
        distinctUntilChanged(),
        tap(() => this.setPage(0)),
        switchMap(() => this.service.getBooks(this.form.value)),
        takeUntil(this.destroy$),
      ).subscribe((books) => this.setBooks(books));
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      page: new FormControl(0),
      subject: new FormControl(''),
    });
  }

}
