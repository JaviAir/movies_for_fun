import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  title: String = '';
  editMode = false;
  movieForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MoviesService,
    private _location: Location,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.editMode = queryParams['edit'];
    });
    this.route.params.subscribe((params: Params) => {
      this.title = params['title'];
      this.initForm();
    });
  }

  onSubmit(content) {
    console.log(this.movieForm);

    if (this.editMode) {
      this.movieService.updateMovie(this.title, this.movieForm.value);
      this.modalService.open(content, {centered: true, size: 'lg'});
      // this._location.back();
      // this.router.navigate(['/movies', this.title]);
    } else {
      this.movieService.addMovietoDatabase(this.movieForm.value);
      this.router.navigate(['/movies']);
    }
  }

  onCancel() {
      this._location.back();
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
      const movie = this.movieService.getMovie(this.title);
      movieTitle = movie.title;
      movieDescription = movie.description;
      movieImagePath = movie.image;
      movieGenre = movie.genre;
      movieRating = movie.rating;

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
