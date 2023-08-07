import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyItemComponent } from './beauty-item.component';

describe('BeautyItemComponent', () => {
  let component: BeautyItemComponent;
  let fixture: ComponentFixture<BeautyItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeautyItemComponent]
    });
    fixture = TestBed.createComponent(BeautyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
