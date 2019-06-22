import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  pageYOffset;

  pageNumber;

  currentMovieIndex: number;

  movieParam;

  spinnerSubject = new Subject<boolean>();

  movieSubject = new Subject<Movie>();

  // for home component filter and sort
  selectedGenreIndex = 0;
  selectedCharIndex = 0;

  selectedGenreName: String = 'All';
  selectedCharName: String = 'All';
  // end for home component

  generalFirstTime: Boolean = true;

  filterAlphabeticalFirstTime: Boolean = true;

  filterGenreFirstTime: Boolean = true;

  movieArrayUpdated = new Subject<Movie[]>();

  constructor(private httpService: HttpService) {}

  private movies: Movie[] = [];

  counter = 0;
  interval;

  populateMovies(loadMore: Boolean) {
    if (!loadMore) {
      console.log('its FALSE, SPLICING NOW');
      this.movies.splice(0, this.movies.length);
    }
    this.httpService.getMovies(this.movies.length).subscribe(data => {
      this.movies.push(...data);
      this.movieArrayUpdated.next(this.movies.slice());
      this.spinnerSubject.next(false);

      // this.interval = setInterval(() => {
      //   this.counter++;
      //   if (this.counter === 3) {
      //     this.movies.push(...data);
      //     this.movieArrayUpdated.next(this.movies.slice());
      //     this.spinnerSubject.next(false);
      //     // if (data.length === 0) {
      //     //   console.log('nothing to load, end of array/db.');
      //     //   this.endOfDbSubject.next(true);
      //     // }
      //     console.log(this.movies);
      //     console.log('Array Length: ' + this.movies.length);
      //     this.counter = 0;
      //     clearInterval(this.interval);
      //   }
      // }, 1000);

    });
  }

  // getMovie(urlTitle: String): Movie {
  //   for (const char in urlTitle) {
  //     if (urlTitle[char] === '_') {
  //       urlTitle = urlTitle.replace('_', ' ');
  //     }
  //   }
  //   this.movies.forEach(movie => {
  //     if (movie.title === urlTitle) {
  //       this.movieParam = movie;
  //     }
  //   });
  //   // if (this.movieParam === null) {
  //   //   this.movieParam = undefined;
  //   // } continue this idea later
  //   return this.movieParam;
  //   // implement index from movieItem to prevent duplication and to uphold authenticity
  // }

  getMovie(urlTitle: String) {
    // console.log(this.movieSubject.next() + ' this is moviesubject');
    // this.movieSubject.next(); // this equals undefined
    let counter = 0;
    for (const char in urlTitle) {
      if (urlTitle[char] === '_') {
        urlTitle = urlTitle.replace('_', ' ');
      }
    }
    console.log('arraysize: ' + this.movies.length);
    this.movies.forEach(movie => {
      if (movie.title === urlTitle) {
        console.log('MATCH should only happen ONCE');
        this.movieSubject.next(movie);
      }
      if (movie.title !== urlTitle) {
        counter++;
      }
      if (counter === this.movies.length) {
        this.movieSubject.next();
      }
    });

    if (this.movies.length === 0) {
      // if user refreshes page
      this.movieSubject.next();
    }
    // if (this.movieParam === null) {
    //   this.movieParam = undefined;
    // } continue this idea later
    // return this.movieParam;

    // implement index from movieItem to prevent duplication and to uphold authenticity
  }

  getMovieInstance(urlTitle: String) {
    for (const char in urlTitle) {
      if (urlTitle[char] === '_') {
        urlTitle = urlTitle.replace('_', ' ');
      }
    }
    this.httpService.getMovieInstance(urlTitle).subscribe((movie: Movie) => {
      console.log(movie);
      this.movieSubject.next(movie);
      // this.movieParam = movie;
      // return this.movieParam;
    });
    // console.log(this.movieParam + 'testing if return success');
    // return this.movieParam;
  }

  getMovieFromIndex() {
    return this.movies[this.currentMovieIndex];
  }

  readmovieArray() {
    this.movieArrayUpdated.next(this.movies.slice());
  }

  oddOneOut(currentGenre: String, currentLetter: String) { // splices movie from array if genre or 1st letter dont align with search options
    if (currentGenre !== 'All' && currentLetter === 'All') { // if just genre is activated
          this.movies.forEach(movie => {
            if (movie.genre !== currentGenre) { // check for changes
              this.movies.splice(this.currentMovieIndex, 1); // remove updated movie
              this.readmovieArray();
            }
          });
    } else if (currentGenre === 'All' && currentLetter !== 'All') { // if just Alphabetical is activated
      this.movies.forEach(movie => {
        if (movie.title[0].toLowerCase() !== currentLetter.toLowerCase()) { // check
          console.log('letter cut from array');
          this.movies.splice(this.currentMovieIndex, 1); // remove
          this.readmovieArray();
        }
      });
    } else { // both are actiavted
      this.movies.forEach(movie => {
        if (movie.title[0].toLowerCase() !== currentLetter.toLowerCase() || movie.genre !== currentGenre) {
          this.movies.splice(this.currentMovieIndex, 1);
          this.readmovieArray();
        }
      });
    }
  }

  addMovietoDatabase(movie: Movie) {
    this.httpService.addMovie(movie).subscribe((data: Movie) => {
      // this.movies.push(data);
      // this.readmovieArray();
      // could add movie to array
      // if array.length < 2 or 3
      // so if page is not scrollable, add it to array and update list
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
        this.movies.push(...data);
        this.readmovieArray();
        this.spinnerSubject.next(false);

        // this.interval = setInterval(() => {
        //   this.counter++;
        //   if (this.counter === 3) {
        //     this.movies.push(...data);
        //     this.readmovieArray();
        //     this.spinnerSubject.next(false);
        //     this.counter = 0;
        //     clearInterval(this.interval);
        //   }
        // }, 1000);
        // console.log(data);
      });
  }

  filterGenre(genre: String, loadMore: Boolean) {
    console.log(genre);
    if (!loadMore) {
      console.log('its FALSE, SPLICING NOW');
      this.movies.splice(0, this.movies.length);
    }
    this.httpService
      .filterGenre(genre, this.movies.length)
      .subscribe((data: Movie[]) => {
        this.movies.push(...data);
        this.readmovieArray();
        this.spinnerSubject.next(false);

        // this.interval = setInterval(() => {
        //   this.counter++;
        //   if (this.counter === 3) {
        //     this.movies.push(...data);
        //     this.readmovieArray();
        //     this.spinnerSubject.next(false);
        //     this.counter = 0;
        //     clearInterval(this.interval);
        //   }
        // }, 1000);

      });
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
    this.httpService
      .filterBoth(selectedCharName, selectedGenreName, this.movies.length)
      .subscribe((data: Movie[]) => {
        this.movies.push(...data);
        this.readmovieArray();
        this.spinnerSubject.next(false);

        // this.interval = setInterval(() => {
        //   this.counter++;
        //   if (this.counter === 3) {
        //     this.movies.push(...data);
        //     this.readmovieArray();
        //     this.spinnerSubject.next(false);
        //     this.counter = 0;
        //     clearInterval(this.interval);
        //   }
        // }, 1000);

      });
    // call htpp.post request for both
  }
}
