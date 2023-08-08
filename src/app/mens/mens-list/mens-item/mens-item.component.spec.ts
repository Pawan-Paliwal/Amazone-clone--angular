import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensItemComponent } from './mens-item.component';

describe('MensItemComponent', () => {
  let component: MensItemComponent;
  let fixture: ComponentFixture<MensItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensItemComponent]
    });
    fixture = TestBed.createComponent(MensItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
