import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVilleComponent } from './register-ville.component';

describe('RegisterVilleComponent', () => {
  let component: RegisterVilleComponent;
  let fixture: ComponentFixture<RegisterVilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterVilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
