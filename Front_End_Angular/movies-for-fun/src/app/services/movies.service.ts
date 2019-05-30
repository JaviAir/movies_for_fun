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

  currentMovieIndex: number;

  movieParam;

  generalFirstTime: Boolean = true;

  filterAlphabeticalFirstTime: Boolean = true;

  filterGenreFirstTime: Boolean = true;

  movieArrayUpdated = new Subject<Movie[]>();

  constructor(private httpService: HttpService) {}

  private movies: Movie[] = [];

  populateMovies(loadMore: Boolean) {
    if (!loadMore) {
      console.log('its FALSE, SPLICING NOW');
      this.movies.splice(0, this.movies.length);
    }
    this.httpService.getMovies(this.movies.length).subscribe(data => {
      this.movies.push(...data);
      this.movieArrayUpdated.next(this.movies.slice());
      console.log(this.movies);
      console.log('Array Length: ' + this.movies.length);
    });
  }

  getMovie(title: String): Movie {
    for (const char in title) {
      if (title[char] === '_') {
        title = title.replace('_', ' ');
      }
    }
    this.movies.forEach(element => {
      if (element.title.toLowerCase() === title.toLowerCase()) {
        this.movieParam = element;
      }
    });
    return this.movieParam;
    // implement index from movieItem to prevent duplication and to uphold authenticity
  }

  getMovieFromIndex() {
    return this.movies[this.currentMovieIndex];
  }

  readmovieArray() {
    this.movieArrayUpdated.next(this.movies.slice());
  }

  addMovietoDatabase(movie: Movie) {
    this.httpService.addMovie(movie).subscribe((data: Movie) => {
      // this.movies.push(data);
      // this.readmovieArray();
    });
  }

  updateMovie(title: String, updatedMovie: Movie) {
    this.httpService
      .updateMovie(title, updatedMovie)
      .subscribe((data: Movie) => {
        this.movies[this.currentMovieIndex] = data;
      });
  }

  deleteMovie(title: String) {
    this.httpService.deleteMovie(title).subscribe(() => {
      this.movies.splice(this.currentMovieIndex, 1);
      this.readmovieArray();
    });
  }

  // filter/sort/query
  // you could splice entire array ex/ splice(0, this.movies.length)
  // then run filtered http get request to fill database with new filtered data
  // it should be displayed upon clicking the LETTER in Alphabetical button
  // pass the letter that was pressed or index value of alphabet, (letter might be easier)
  // use that letter value in the filter/get request

  filterAlphabetically(selectedChar: String, loadMore: Boolean) {
    console.log(selectedChar);
    if (!loadMore) {
      console.log('its FALSE, SPLICING NOW');
      this.movies.splice(0, this.movies.length);
    }
    this.httpService
      .getAlphabetizedOrder(selectedChar, this.movies.length)
      .subscribe((data: Movie[]) => {
        console.log(data);
        this.movies.push(...data);
        this.readmovieArray();
      });
  }

  filterGenre(genre: String, loadMore: Boolean) {
    console.log(genre);
    if (!loadMore) {
      console.log('its FALSE, SPLICING NOW');
      this.movies.splice(0, this.movies.length);
    }
    this.httpService.filterGenre(genre, this.movies.length).subscribe(
      (data: Movie[]) => {
        this.movies.push(...data);
        this.readmovieArray();
      }
    );
  }

  filterGenreAndAlphabetical(
    selectedCharName: String,
    selectedGenreName: String,
    loadMore: Boolean
  ) {
    console.log(selectedGenreName + 'BOTH' + selectedCharName);
    if (!loadMore) {
      console.log('its FALSE, SPLICING NOW');
      this.movies.splice(0, this.movies.length);
    }
    this.httpService.filterBoth(selectedCharName, selectedGenreName, this.movies.length).subscribe(
      (data: Movie[]) => {
        this.movies.push(...data);
        this.readmovieArray();
      }
    );
    // call htpp.post request for both
  }
}
