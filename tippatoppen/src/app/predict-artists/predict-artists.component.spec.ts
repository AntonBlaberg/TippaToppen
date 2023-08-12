import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictArtistsComponent } from './predict-artists.component';

describe('PredictArtistsComponent', () => {
  let component: PredictArtistsComponent;
  let fixture: ComponentFixture<PredictArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictArtistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
