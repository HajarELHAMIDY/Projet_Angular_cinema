import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFilmComponent } from './register-film.component';

describe('RegisterFilmComponent', () => {
  let component: RegisterFilmComponent;
  let fixture: ComponentFixture<RegisterFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
