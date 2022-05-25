import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoCompraComponent } from './modal-info-compra.component';

describe('ModalInfoCompraComponent', () => {
  let component: ModalInfoCompraComponent;
  let fixture: ComponentFixture<ModalInfoCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInfoCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
