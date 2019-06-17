import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  // CRUD
  // local = 'http://localhost:4000/';
  // firebase was firebaseprofile/app
  herokuUrl = 'https://stark-brook-68539.herokuapp.com/';

  getMovies(n: Number) {
    return this.http.post<Movie[]>( this.herokuUrl + 'pagemovies', {
      n: n
    });
  }

  addMovie(movie: Movie) {
    return this.http.post(this.herokuUrl + 'movies', movie);
  }

  updateMovie(oldTitle: String, movie: Movie) {
    return this.http.put(this.herokuUrl + 'movies/' + oldTitle, movie);
  }

  deleteMovie(oldTitle: String) {
    return this.http.delete(this.herokuUrl + 'movies/' + oldTitle);
  }

  // FILTERS

  getAlphabetizedOrder(char: String, skipNumber: Number) {
    return this.http.post(this.herokuUrl + 'movies' + '/filterchar', {
      char: char,
      n: skipNumber
    });
  }

  filterGenre(genre: String, skipNumber: Number) {
    return this.http.post(this.herokuUrl + 'movies' + '/filtergenre', {
      genre: genre,
      n: skipNumber
    });
  }

  filterBoth(char: String, genre: String, skipNumber: Number) {
    return this.http.post(this.herokuUrl + 'movies' + '/filterboth', {
      char: char,
      genre: genre,
      n: skipNumber
    });
  }
}
