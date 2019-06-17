import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './home/movie-detail/movie-detail.component';
import { MovieEditComponent } from './home/movie-edit/movie-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: HomeComponent},
  { path: 'movies/:title', component: MovieDetailComponent},
  { path: 'movies/:title/edit', component: MovieEditComponent},
  { path: 'addMovie', component: MovieEditComponent},
  { path: '**', redirectTo: '/movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'disabled'}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
