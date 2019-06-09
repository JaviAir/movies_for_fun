import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ MovieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit movie from edit button', () => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    component.onEdit();
    expect(component.editMode).toBe(true);
  });

  it('should delete movie from delete button', () => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    component.onDelete();
    // make it expect something with spyon or toHaveBeenCalled()
  });

});
