import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickScoreModalComponent } from './quick-score-modal.component';

describe('QuickScoreModalComponent', () => {
  let component: QuickScoreModalComponent;
  let fixture: ComponentFixture<QuickScoreModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickScoreModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickScoreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
