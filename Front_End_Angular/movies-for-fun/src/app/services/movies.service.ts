import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject } from 'rxjs';
import { Movie } from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

    pageYOffset = 50;

    pageNumber;

    movieArrayUpdated = new Subject<Movie[]>();

    constructor(private httpService: HttpService) { }

    private movies: Movie[] = [

    ]  ;

    populateMovies(n) {
      this.httpService.getMovies(n).subscribe((data) => {
        this.movies.push(...data);
        this.movieArrayUpdated.next(this.movies.slice());
        console.log(this.movies);
       });
    }

    readmovieArray() {
      this.movieArrayUpdated.next(this.movies.slice());
    }

    addMovietoDatabase() {
      this.httpService.addMovie().subscribe(data => console.log(data));
    }

}
