import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSeanceComponent } from './register-seance.component';

describe('RegisterSeanceComponent', () => {
  let component: RegisterSeanceComponent;
  let fixture: ComponentFixture<RegisterSeanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSeanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
