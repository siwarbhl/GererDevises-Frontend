import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertirMontantComponent } from './convertir-montant.component';

describe('ConvertirMontantComponent', () => {
  let component: ConvertirMontantComponent;
  let fixture: ComponentFixture<ConvertirMontantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertirMontantComponent]
    });
    fixture = TestBed.createComponent(ConvertirMontantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
