import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalItemComponent } from './personal-item.component';

describe('PersonalItemComponent', () => {
  let component: PersonalItemComponent;
  let fixture: ComponentFixture<PersonalItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalItemComponent]
    });
    fixture = TestBed.createComponent(PersonalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
