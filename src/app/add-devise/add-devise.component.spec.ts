import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviseComponent } from './add-devise.component';

describe('AddDeviseComponent', () => {
  let component: AddDeviseComponent;
  let fixture: ComponentFixture<AddDeviseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDeviseComponent]
    });
    fixture = TestBed.createComponent(AddDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
