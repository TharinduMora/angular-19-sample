import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxWithSignalsComponent } from './redux-with-signals.component';

describe('ReduxWithSignalsComponent', () => {
  let component: ReduxWithSignalsComponent;
  let fixture: ComponentFixture<ReduxWithSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReduxWithSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReduxWithSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
