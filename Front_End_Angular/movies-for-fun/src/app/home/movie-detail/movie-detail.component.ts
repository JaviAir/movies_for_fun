import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

   constructor() { }
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
  }

  ngOnDestroy() {

  }

  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onScroll(event) {
  //   console.log('Scrolling: ' + window.pageYOffset);
  // }

}
