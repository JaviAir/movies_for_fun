import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie.model';

@Injectable()
export class MovieDetailResolver implements Resolve<any> {

  movie: Movie;


  constructor(private movieService: MoviesService) {}

  resolve( route: ActivatedRouteSnapshot) {

    this.movieService.spinnerSubject.next(true);

    this.movie = this.movieService.getMovieFromIndex();
    if (this.movie) {
      this.movieService.spinnerSubject.next(false);
      return this.movie;
    }
    return this.movieService.getMovieFromDB(route.paramMap.get('title'));
  }
}
