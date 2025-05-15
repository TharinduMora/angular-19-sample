import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderModeComponent } from './render-mode.component';

describe('RenderModeComponent', () => {
  let component: RenderModeComponent;
  let fixture: ComponentFixture<RenderModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderModeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
