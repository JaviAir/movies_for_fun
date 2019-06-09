import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-list/movie-item/movie-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule
      ],
      declarations: [ HomeComponent, MovieListComponent, MovieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'movies-for-fun'`, () => {
    fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('movies-for-fun');
  });

  it('should render title in a h1 tag', () => {
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to movies-for-fun!');
  });

  it('should set Letter and Genre to 0', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    app.onGenreSelected(0);
    app.onLetterSelected(0);
    app.nextArray();
    expect(app.selectedCharName).toBe('All');
    expect(app.selectedCharIndex).toBe(0);
    expect(app.selectedGenreName).toBe('All');
    expect(app.selectedGenreIndex).toBe(0);
  });

  it('should set Genre to 1 and Letter to 0', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    app.onGenreSelected(1);
    app.onLetterSelected(0);
    app.nextArray();
    expect(app.selectedCharName).toBe('All');
    expect(app.selectedCharIndex).toBe(0);
    expect(app.selectedGenreName).toBe('Action');
    expect(app.selectedGenreIndex).toBe(1);
  });

  it('should set Genre to 0 and Letter to 1', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    app.onLetterSelected(1);
    app.onGenreSelected(0);
    app.nextArray();
    expect(app.selectedGenreName).toBe('All');
    expect(app.selectedGenreIndex).toBe(0);
    expect(app.selectedCharName).toBe('A');
    expect(app.selectedCharIndex).toBe(1);

  });

  it('should set Genre and Letter to 1', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    app.onLetterSelected(1);
    app.onGenreSelected(1);
    app.onLetterSelected(1);
    app.nextArray();
    expect(app.selectedCharName).toBe('A');
    expect(app.selectedCharIndex).toBe(1);
    expect(app.selectedGenreName).toBe('Action');
    expect(app.selectedGenreIndex).toBe(1);
  });

});
