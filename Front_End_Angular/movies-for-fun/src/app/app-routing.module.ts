import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './home/movie-detail/movie-detail.component';
import { MovieListComponent } from './home/movie-list/movie-list.component';
import { MovieItemComponent } from './home/movie-list/movie-item/movie-item.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieEditComponent } from './home/movie-edit/movie-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: HomeComponent},
  { path: 'movies/:title', component: MovieDetailComponent},
  { path: 'movies/:title/edit', component: MovieEditComponent},
  { path: 'addMovie', component: MovieEditComponent}



  // this is for if i want home to have two child routes or swithc between movie-list and movie-detail
  // { path: '', component: HomeComponent, children: [
  //   {path: 'movies', component: MovieListComponent},
  //   {path: ':title', component: MovieDetailComponent}
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'disabled'}) ],
   // {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', scrollOffset: [0, 6400] })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
