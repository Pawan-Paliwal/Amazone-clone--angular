import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsListComponent } from './electronics-list.component';

describe('ElectronicsListComponent', () => {
  let component: ElectronicsListComponent;
  let fixture: ComponentFixture<ElectronicsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicsListComponent]
    });
    fixture = TestBed.createComponent(ElectronicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
