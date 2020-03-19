import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// routing
import { BooksRoutingModule } from './books-routing.module';

// components
import { BooksListComponent, BookCardComponent, FavoritesComponent, BooksComponent } from './components';

// material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

// pipes
import { TruncatePipe } from './pipes';

@NgModule({
  declarations: [
    BooksListComponent,
    TruncatePipe,
    BookCardComponent,
    FavoritesComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    ScrollingModule,
    MatToolbarModule,
    HttpClientModule,
    BooksRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ]
})
export class BooksModule { }
