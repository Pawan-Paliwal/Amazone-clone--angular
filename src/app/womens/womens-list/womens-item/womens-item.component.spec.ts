import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensItemComponent } from './womens-item.component';

describe('WomensItemComponent', () => {
  let component: WomensItemComponent;
  let fixture: ComponentFixture<WomensItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomensItemComponent]
    });
    fixture = TestBed.createComponent(WomensItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
