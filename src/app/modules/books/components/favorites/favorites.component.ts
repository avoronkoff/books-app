import { ChangeDetectionStrategy, Component } from '@angular/core';

// services
import { BooksService } from '../../services';

// interfaces
import { IBook } from '../../interfaces';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent {
  public favorites: IBook[] = this.service.favorites;

  constructor(private service: BooksService) { }

  public trackByFn = (_: number, item: IBook): string => item.id;

}
