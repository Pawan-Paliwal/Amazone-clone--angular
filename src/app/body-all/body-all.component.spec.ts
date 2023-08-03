import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAllComponent } from './body-all.component';

describe('BodyAllComponent', () => {
  let component: BodyAllComponent;
  let fixture: ComponentFixture<BodyAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyAllComponent]
    });
    fixture = TestBed.createComponent(BodyAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
