import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVeiculoComponent } from './button-veiculo.component';

describe('ButtonVeiculoComponent', () => {
  let component: ButtonVeiculoComponent;
  let fixture: ComponentFixture<ButtonVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
