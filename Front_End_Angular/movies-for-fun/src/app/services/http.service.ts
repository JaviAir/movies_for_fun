import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  // CRUD

  apiUrl = 'http://localhost:4000/';
  // local = 'http://localhost:4000/';
  // firebase was firebaseprofile/app
  //

  getMovies(n: Number) {
    return this.http.post<Movie[]>( this.apiUrl + 'pagemovies', {
      n: n
    });
  }

  getMovieInstance(urlTitle: String) {
    return this.http.get<Movie>( this.apiUrl + 'movies/' + urlTitle);
  }

  addMovie(movie: Movie) {
    return this.http.post(this.apiUrl + 'movies', movie);
  }

  updateMovie(oldTitle: String, movie: Movie) {
    return this.http.put(this.apiUrl + 'movies/' + oldTitle, movie);
  }

  deleteMovie(oldTitle: String) {
    return this.http.delete(this.apiUrl + 'movies/' + oldTitle);
  }

  // FILTERS

  getAlphabetizedOrder(char: String, skipNumber: Number) {
    return this.http.post(this.apiUrl + 'movies' + '/filterchar', {
      char: char,
      n: skipNumber
    });
  }

  filterGenre(genre: String, skipNumber: Number) {
    return this.http.post(this.apiUrl + 'movies' + '/filtergenre', {
      genre: genre,
      n: skipNumber
    });
  }

  filterBoth(char: String, genre: String, skipNumber: Number) {
    return this.http.post(this.apiUrl + 'movies' + '/filterboth', {
      char: char,
      genre: genre,
      n: skipNumber
    });
  }
}
