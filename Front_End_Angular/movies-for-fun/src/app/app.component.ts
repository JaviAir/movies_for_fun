import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    console.log('app component initialized');
    this.movieService.pageNumber = 1;
    this.movieService.populateMovies(1);
  }


}
