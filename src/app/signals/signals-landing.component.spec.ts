import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsLandingComponent } from './signals-landing.component';

describe('SignalsLandingComponent', () => {
  let component: SignalsLandingComponent;
  let fixture: ComponentFixture<SignalsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
