import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentedImageComponent } from './presented-image.component';

describe('PresentedImageComponent', () => {
  let component: PresentedImageComponent;
  let fixture: ComponentFixture<PresentedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
