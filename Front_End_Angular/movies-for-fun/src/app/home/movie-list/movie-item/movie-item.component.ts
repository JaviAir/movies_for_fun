import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;
  @Input() index: number;
  searchBarTitle: String;

  constructor(private movieService: MoviesService, private route: Router) {}

  ngOnInit() {}

  savePageYOffset() {
    // Saves the previous pages' (movielist.component) Y offset and stores it into in-memory pageYOffset
    this.movieService.pageYOffset = window.pageYOffset;
    this.convertSpaceToUnderscore(this.movie.title);
    this.route.navigate(['/movies', this.searchBarTitle]);

    this.movieService.currentMovieIndex = this.index; // saves index of currently selected movieItem in-memory
  }

  convertSpaceToUnderscore(title: String) {
    for (const char in title) {
      if (title[char] === ' ') {
        title = title.replace(' ', '_');
      }
    }
    console.log(title.toLowerCase());
    this.searchBarTitle = title.toLowerCase();
  }
}
