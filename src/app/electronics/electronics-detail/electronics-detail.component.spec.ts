import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsDetailComponent } from './electronics-detail.component';

describe('ElectronicsDetailComponent', () => {
  let component: ElectronicsDetailComponent;
  let fixture: ComponentFixture<ElectronicsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicsDetailComponent]
    });
    fixture = TestBed.createComponent(ElectronicsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
