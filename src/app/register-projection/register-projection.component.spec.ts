import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProjectionComponent } from './register-projection.component';

describe('RegisterProjectionComponent', () => {
  let component: RegisterProjectionComponent;
  let fixture: ComponentFixture<RegisterProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
