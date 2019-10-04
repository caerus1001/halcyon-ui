import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTabGroupComponent } from './game-tab-group.component';

describe('GameTabGroupComponent', () => {
  let component: GameTabGroupComponent;
  let fixture: ComponentFixture<GameTabGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTabGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
