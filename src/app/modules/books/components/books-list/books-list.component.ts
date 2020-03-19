import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

// interfaces
import { IBook } from '../../interfaces';

// models
import { ScrollData } from '../../models';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksListComponent {
  @Input() books: IBook[];
  @Output() emitScroll = new EventEmitter();

  public trackByFn = (_: number, item: IBook): string => item.id;

  public onScroll(index: number): void {
    const size = this.books ? this.books.length : 0;
    this.emitScroll.emit(new ScrollData(index, size));
  }

}
