import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesComponent} from './components/movies/movies.component';
import {RouterModule} from "@angular/router";
import {MovieShortComponent} from './components/movie-short/movie-short.component';
import { GenresComponent } from './components/genres/genres.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { StarsComponent } from './components/stars/stars.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieShortComponent,
    GenresComponent,
    PaginatorComponent,
    StarsComponent,
    MovieDetailsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: MoviesComponent},
      {path: 'search', component: SearchComponent},
      {path: ':id', component: MovieDetailsComponent}
    ])
  ],
  providers: []
})
export class MoviesModule {
}
