import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

// rxjs
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

// interfaces
import { IBook, IBookForm, IBooks } from '../interfaces';

@Injectable()
export class BooksService {
  public total: number;

  constructor(private http: HttpClient) { }

  public get favorites(): IBook[] {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  }

  public getBooks(form: IBookForm): Observable<IBook[]> {
    const params: HttpParams = new HttpParams()
      .set('q', `subject:${form.subject}`)
      .set('startIndex', String(form.page));

    return this.http.get<IBooks>('api/books/v1/volumes', { params })
      .pipe(
        tap((data) => this.total = data.totalItems),
        map(({ items }) => items || []),
      );
  }
}
