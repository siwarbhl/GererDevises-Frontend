import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviseListComponent } from './devise-list.component';

describe('DeviseListComponent', () => {
  let component: DeviseListComponent;
  let fixture: ComponentFixture<DeviseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviseListComponent]
    });
    fixture = TestBed.createComponent(DeviseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
