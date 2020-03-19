import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// interfaces
import { IBook } from '../../interfaces';

// services
import { BooksService } from '../../services';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent {
  @Input() book: IBook;

  constructor(private service: BooksService) { }

  public setFavorite(book: IBook): void {
    localStorage.setItem('favorites', JSON.stringify([...this.service.favorites, book]));
  }
}
