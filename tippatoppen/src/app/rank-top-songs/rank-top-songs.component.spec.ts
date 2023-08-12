import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankTopSongsComponent } from './rank-top-songs.component';

describe('RankTopSongsComponent', () => {
  let component: RankTopSongsComponent;
  let fixture: ComponentFixture<RankTopSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankTopSongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankTopSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
