import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

   @Input() movie: Movie;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {

  }

  savePageYOffset() {
    // Saves the previous pages' (movielist.component) Y offset and stores it into in-memory pageYOffset
    this.movieService.pageYOffset = window.pageYOffset;
  }

}
