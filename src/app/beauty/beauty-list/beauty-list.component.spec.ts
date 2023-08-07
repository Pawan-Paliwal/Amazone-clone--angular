import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyListComponent } from './beauty-list.component';

describe('BeautyListComponent', () => {
  let component: BeautyListComponent;
  let fixture: ComponentFixture<BeautyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeautyListComponent]
    });
    fixture = TestBed.createComponent(BeautyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
