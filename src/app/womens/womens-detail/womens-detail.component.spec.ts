import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensDetailComponent } from './womens-detail.component';

describe('WomensDetailComponent', () => {
  let component: WomensDetailComponent;
  let fixture: ComponentFixture<WomensDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomensDetailComponent]
    });
    fixture = TestBed.createComponent(WomensDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
