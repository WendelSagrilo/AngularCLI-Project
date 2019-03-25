import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRotaComponent } from './formulario-rota.component';

describe('FormularioRotaComponent', () => {
  let component: FormularioRotaComponent;
  let fixture: ComponentFixture<FormularioRotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
