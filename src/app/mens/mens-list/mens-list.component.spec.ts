import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensListComponent } from './mens-list.component';

describe('MensListComponent', () => {
  let component: MensListComponent;
  let fixture: ComponentFixture<MensListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensListComponent]
    });
    fixture = TestBed.createComponent(MensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
