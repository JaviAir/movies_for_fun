import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { LocationStrategy, Location } from '@angular/common';
import { Movie } from 'src/app/models/movie.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  movie: Movie;
  title: String;
  editMode: Boolean;

   constructor(private route: ActivatedRoute, private movieService: MoviesService, private _location: Location) { }
  // both location and host listener can find out the window location, so whetehr you pressed back button or not.

  // constructor(location: LocationStrategy) {
  //   location.onPopState(() => {
  //     console.log('Proceeding to: ' + window.location);
  //   });
  // }

  // @HostListener('window:popstate', ['$event'])
  // onPopState(event) {
  //   console.log('Back button pressed');
  // }

  ngOnInit() {
    window.scrollTo(0, 0); // needed because for some reason this component scrolls to the same pageYOffset as the previous
    // this.movie = this.movieService.getMovieFromIndex();
    console.log(this.movie);
    // this will just call getMovie and return the current movie index, no title need to be passed
    this.route.params.subscribe(
      (params: Params) => {
        this.title = params['title'];
        // this.movieService.readmovieArray();
        this.movie = this.movieService.getMovie(this.title);
        console.log(this.movie);
      }
    );
    // this.movieService.readmovieArray();
    // this.movie = this.movieService.getMovie(this.title);
  }

  ngOnDestroy() {

  }

  onEdit() {
    this.editMode = true;
    console.log(this.editMode);
  }

  onDelete() {
    this.movieService.deleteMovie(this.title);
    this._location.back();
  }

  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onScroll(event) {
  //   console.log('Scrolling: ' + window.pageYOffset);
  // }

}
