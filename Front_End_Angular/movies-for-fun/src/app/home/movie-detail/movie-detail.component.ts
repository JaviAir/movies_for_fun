import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { LocationStrategy, Location } from '@angular/common';
import { Movie } from 'src/app/models/movie.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movie: Movie;
  title: String;
  editMode: Boolean;
  showSpinner: boolean;

  private movieSubjectSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private _location: Location
  ) {}
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
    this.showSpinner = true;
    // this.movie = this.movieService.getMovieFromIndex();
    // this will just call getMovie and return the current movie index, no title need to be passed

    this.route.params.subscribe((params: Params) => {
      this.title = params['title'];
    });

    // subscribe to movieSubject
    this.movieSubjectSubscription = this.movieService.movieSubject.subscribe(
      (movie: Movie) => {
        console.log('SUBJECT SUBSCRIBER CALLED');
          this.movie = movie;
        if (movie === undefined) {
          this.movieService.getMovieInstance(this.title);
        } else {
          this.showSpinner = false;
        }
      }
    );
    this.movieService.getMovie(this.title);
  }

  ngOnDestroy() {
    this.movieSubjectSubscription.unsubscribe();
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
