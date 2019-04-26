import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRatingBarComponent } from './game-rating-bar.component';

describe('GameRatingBarComponent', () => {
  let component: GameRatingBarComponent;
  let fixture: ComponentFixture<GameRatingBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRatingBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRatingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
