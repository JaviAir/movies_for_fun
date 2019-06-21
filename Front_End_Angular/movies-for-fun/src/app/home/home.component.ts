import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'Movies4Fun';

  showSpinner = false;

  private spinnerSub: Subscription;

  selectedGenreIndex = this.movieService.selectedGenreIndex;
  selectedCharIndex = this.movieService.selectedCharIndex;

  selectedGenreName = this.movieService.selectedGenreName;
  selectedCharName = this.movieService.selectedCharName;

  genre: String[] = ['All', 'Action', 'Comedy', 'Horror', 'Romance', 'Sci-Fi'];
  // user should SELECT genre form dropdown menu int he FORMS section.

  alphabet: String[] = [
    'All',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    // subscribe to spinnerSubject<boolean>
    this.spinnerSub = this.movieService.spinnerSubject.subscribe(
      (bool: boolean) => {
        this.showSpinner = bool;
      }
    );

    if (this.selectedGenreName !== 'All' || this.selectedCharName !== 'All') {
      this.movieService.oddOneOut(this.selectedGenreName, this.selectedCharName);
    }
  }

  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onScroll(event: { target: { scrollTop: number; }; }) {
  //   console.log('Scrolling: ' + window.pageYOffset);
  //   // this.myYaxis++;
  //   // console.log('My y axis: ' + this.myYaxis);
  //   if (scrollY > document.body.scrollHeight - document.body.offsetHeight - 1) {
  //     console.log('bottom');

  //   }console.log(document.body.scrollTop);
  //   console.log();
  //   console.log(document.body.scrollHeight);
  // }

  onLetterSelected(charIndex: number) {
    this.movieService.selectedCharName = this.alphabet[charIndex];
    this.movieService.selectedCharIndex = charIndex;
    this.retrieveStoredValues();

    if (this.selectedGenreIndex === 0 && this.selectedCharIndex === 0) {
      // if no filters active
      this.movieService.populateMovies(false);
    } else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex === 0) {
      // if only genre filter is active
      this.movieService.filterGenre(this.selectedGenreName, false);
    } else if (this.selectedGenreIndex === 0 && this.selectedCharIndex !== 0) {
      // if only alphabetical filter is active
      this.movieService.filterAlphabetically(this.selectedCharName, false);
    } else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex !== 0) {
      // if both filters are active
      this.movieService.filterGenreAndAlphabetical(
        this.selectedCharName,
        this.selectedGenreName,
        false
      );
    }
  }

  onGenreSelected(genreindex: number) {
    this.movieService.selectedGenreName = this.genre[genreindex]; // save the selected genre
    this.movieService.selectedGenreIndex = genreindex; // save the selected genre name
    this.retrieveStoredValues();

    if (this.selectedGenreIndex === 0 && this.selectedCharIndex === 0) {
      // if no filters active
      this.movieService.populateMovies(false);
    } else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex === 0) {
      // if only genre filter is active
      this.movieService.filterGenre(this.selectedGenreName, false);
    } else if (this.selectedGenreIndex === 0 && this.selectedCharIndex !== 0) {
      // if only alphabetical filter is active
      this.movieService.filterAlphabetically(this.selectedCharName, false);
    } else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex !== 0) {
      // if both filters are active
      this.movieService.filterGenreAndAlphabetical(
        this.selectedCharName,
        this.selectedGenreName,
        false
      );
    }
  }

  nextArray() {
    this.retrieveStoredValues();
    if (this.selectedGenreIndex === 0 && this.selectedCharIndex === 0) {
      // if no filters active
      this.movieService.populateMovies(true);
    } else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex === 0) {
      // if only genre filter is active
      this.movieService.filterGenre(this.selectedGenreName, true);

    } else if (this.selectedGenreIndex === 0 && this.selectedCharIndex !== 0) {
      // if only alphabetical filter is active
      this.movieService.filterAlphabetically(this.selectedCharName, true);
    } else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex !== 0) {
      // if both filters are active
      this.movieService.filterGenreAndAlphabetical(
        this.selectedCharName,
        this.selectedGenreName,
        true
      );
    }
  }

  retrieveStoredValues() {
    this.selectedGenreIndex = this.movieService.selectedGenreIndex;
    this.selectedCharIndex = this.movieService.selectedCharIndex;

    this.selectedGenreName = this.movieService.selectedGenreName;
    this.selectedCharName = this.movieService.selectedCharName;
  }

  onScroll() { // user has reached end of page
    this.showSpinner = true; // show loading spinner
    this.nextArray(); // retrieve data from server

  }

  ngOnDestroy() {
    this.spinnerSub.unsubscribe();
  }

}
