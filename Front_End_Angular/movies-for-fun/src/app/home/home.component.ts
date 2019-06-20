import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Movies4Fun';

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
    // this.retrieveStoredValues();
  }
  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onScroll(event) {
  //   console.log('Scrolling: ' + window.pageYOffset);
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
    console.log('loadnextarrayformhome!');
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

}
