import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'

// components
import { BooksComponent } from './components';

// components

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
