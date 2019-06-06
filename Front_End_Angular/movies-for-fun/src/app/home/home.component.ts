import { Component, OnInit, HostListener } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'movies-for-fun';

  selectedGenreIndex = 0;
  selectedCharIndex = 0;

  selectedGenreName: String = 'All';
  selectedCharName: String = 'All';

  genre: String[] = ['All', 'Action', 'Comedy', 'Horror', 'Romance', 'Sci-Fi']; // user should SELECT genre form dropdown menu int he FORMS section.

  alphabet: String[] =
    ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(private movieService: MoviesService) {}

  ngOnInit() {}
  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onScroll(event) {
  //   console.log('Scrolling: ' + window.pageYOffset);
  // }

  onLetterSelected(charIndex: number) {
    this.selectedCharName = this.alphabet[charIndex];
    this.selectedCharIndex = charIndex;

    if (this.selectedGenreIndex === 0 && this.selectedCharIndex === 0) { // if no filters active
      this.movieService.populateMovies(false);
    } else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex === 0) { // if only genre filter is active
      this.movieService.filterGenre(this.selectedGenreName, false);
    } else if (this.selectedGenreIndex === 0 && this.selectedCharIndex !== 0) { // if only alphabetical filter is active
      this.movieService.filterAlphabetically(this.selectedCharName, false);
    } else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex !== 0) { // if both filters are active
      this.movieService.filterGenreAndAlphabetical(
        this.selectedCharName,
        this.selectedGenreName,
        false
      );
    }
  }

  onGenreSelected(genreindex: number) {
    this.selectedGenreName = this.genre[genreindex]; // save the selected genre
    this.selectedGenreIndex = genreindex; // save the selected genre name

    if (this.selectedGenreIndex === 0 && this.selectedCharIndex === 0) { // if no filters active
      this.movieService.populateMovies(false);
    } else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex === 0) { // if only genre filter is active
      this.movieService.filterGenre(this.selectedGenreName, false);
    } else if (this.selectedGenreIndex === 0 && this.selectedCharIndex !== 0) { // if only alphabetical filter is active
      this.movieService.filterAlphabetically(this.selectedCharName, false);
    } else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex !== 0) { // if both filters are active
      this.movieService.filterGenreAndAlphabetical(
        this.selectedCharName,
        this.selectedGenreName,
        false
      );
    }
  }

  nextArray() {
    console.log('loadnextarrayformhome!');
    if (this.selectedGenreIndex === 0 && this.selectedCharIndex === 0) { // if no filters active
      this.movieService.populateMovies(true);
    } else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex === 0) { // if only genre filter is active
      this.movieService.filterGenre(this.selectedGenreName, true);
    } else if (this.selectedGenreIndex === 0 && this.selectedCharIndex !== 0) { // if only alphabetical filter is active
      this.movieService.filterAlphabetically(this.selectedCharName, true);
    } else if (this.selectedGenreIndex !== 0 && this.selectedCharIndex !== 0) { // if both filters are active
      this.movieService.filterGenreAndAlphabetical(
        this.selectedCharName,
        this.selectedGenreName,
        true
      );
    }
  }
}
