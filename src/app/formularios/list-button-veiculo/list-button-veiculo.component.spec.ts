import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListButtonVeiculoComponent } from './list-button-veiculo.component';

describe('ListButtonVeiculoComponent', () => {
  let component: ListButtonVeiculoComponent;
  let fixture: ComponentFixture<ListButtonVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListButtonVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListButtonVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
