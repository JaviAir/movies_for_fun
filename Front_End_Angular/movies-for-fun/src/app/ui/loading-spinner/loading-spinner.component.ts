import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('spinner created');
  }

  ngOnDestroy() {
    console.log('spinner destroyed');
  }

}
