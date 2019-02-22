import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesByPlatformComponent } from './games-by-platform.component';

describe('GamesByPlatformComponent', () => {
  let component: GamesByPlatformComponent;
  let fixture: ComponentFixture<GamesByPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesByPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesByPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
