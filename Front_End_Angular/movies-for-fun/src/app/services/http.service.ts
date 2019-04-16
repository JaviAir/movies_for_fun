import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getMovies(n) {
     return this.http.post<Movie[]>('http://localhost:4000/pagemovies', { 'n' : n });
  }

  addMovie() {
      return this.http.post('http://localhost:4000/movies', {
      'title': 'title angular',
      'description': 'description angular.'
    });
  }

}
