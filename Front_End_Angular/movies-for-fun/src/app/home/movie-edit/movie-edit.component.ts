import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit, OnDestroy {
  title: String = '';
  editMode = false;
  movieForm: FormGroup;
  movie: Movie;
  showSpinner = true;

  private movieSubjectSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MoviesService,
    private _location: Location,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
        this.movieSubjectSubscription = this.movieService.movieSubject.subscribe(
      (movie: Movie) => {
          this.movie = movie;
        if (this.movie) {
          this.initForm();
        }
        if (movie === undefined) {
          this.movieService.getMovieInstance(this.title);
        } else {
          this.showSpinner = false;
        }
      }
    );
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.editMode = queryParams['edit'];
    });
    this.route.params.subscribe((params: Params) => {
      this.title = params['title'];

    });
    if (this.title === undefined && this.editMode === undefined) {
      this.initForm();
    } else {
          this.movieService.getMovie(this.title);
    }
  }

  onSubmit(content) {
    console.log(this.movieForm);

    if (this.editMode) {
      this.movieService.updateMovie(this.title, this.movieForm.value);
      this.modalService.open(content, {centered: true, size: 'lg'});
    } else {
      this.movieService.addMovietoDatabase(this.movieForm.value);
      this.router.navigate(['/movies']);
    }
  }

  onCancel() {
    // console.log(this.movieForm.getRawValue);
    // this.route.params['title'] = 'test';
    // console.log(this.route.params);
    // this.router.navigate(['/movies/' + this.title]);
    this.router.navigate(['/movies']);
      // this._location.back();
  }

  ngOnDestroy() {
    this.movieSubjectSubscription.unsubscribe();
  }

  // method where
  // if editMode = true
  // fill form with prepopulated values
  // else
  // use empty values
  private initForm() {
    let movieTitle: String = '';
    let movieDescription: String = '';
    let movieImagePath: String = '';
    let movieGenre: String = '';
    let movieRating: String = '';

    if (this.editMode) {
      movieTitle = this.movie.title;
      movieDescription = this.movie.description;
      movieImagePath = this.movie.image;
      movieGenre = this.movie.genre;
      movieRating = this.movie.rating;

    }

    this.movieForm = new FormGroup({
      title: new FormControl(movieTitle, Validators.required),
      description: new FormControl(movieDescription, Validators.required),
      image: new FormControl(movieImagePath, Validators.required),
      genre: new FormControl(movieGenre, Validators.required),
      rating: new FormControl(movieRating, Validators.required)
    });
  }
}
