import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitarProductosComponent } from './quitar-productos.component';

describe('QuitarProductosComponent', () => {
  let component: QuitarProductosComponent;
  let fixture: ComponentFixture<QuitarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuitarProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuitarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
