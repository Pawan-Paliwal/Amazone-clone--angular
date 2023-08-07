import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyDetailComponent } from './beauty-detail.component';

describe('BeautyDetailComponent', () => {
  let component: BeautyDetailComponent;
  let fixture: ComponentFixture<BeautyDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeautyDetailComponent]
    });
    fixture = TestBed.createComponent(BeautyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
