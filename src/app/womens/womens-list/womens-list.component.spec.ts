import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensListComponent } from './womens-list.component';

describe('WomensListComponent', () => {
  let component: WomensListComponent;
  let fixture: ComponentFixture<WomensListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomensListComponent]
    });
    fixture = TestBed.createComponent(WomensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
