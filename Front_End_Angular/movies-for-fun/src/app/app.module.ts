import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './home/movie-list/movie-list.component';
import { MovieItemComponent } from './home/movie-list/movie-item/movie-item.component';
import { MoviesService } from './services/movies.service';
import { MovieDetailComponent } from './home/movie-detail/movie-detail.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieEditComponent } from './home/movie-edit/movie-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailComponent,
    AddMovieComponent,
    MovieEditComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule, NgbModule],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
