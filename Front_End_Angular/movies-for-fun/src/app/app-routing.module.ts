import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './home/movie-detail/movie-detail.component';
import { MovieListComponent } from './home/movie-list/movie-list.component';
import { MovieItemComponent } from './home/movie-list/movie-item/movie-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: HomeComponent},
  { path: 'movie/detail', component: MovieDetailComponent}

  // this is for if i want home to have two child routes or swithc between movie-list and movie-detail
  // { path: '', component: HomeComponent, children: [
  //   {path: 'movies', component: MovieListComponent},
  //   {path: 'movie/detail', component: MovieDetailComponent}
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'disabled'}) ],
   // {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', scrollOffset: [0, 6400] })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
