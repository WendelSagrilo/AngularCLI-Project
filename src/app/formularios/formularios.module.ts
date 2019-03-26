import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatButtonToggleModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatExpansionPanel, MatExpansionModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { FormularioRotaComponent } from './formulario-rota/formulario-rota.component';
import { ButtonVeiculoComponent } from './button-veiculo/button-veiculo.component';
import { ListButtonVeiculoComponent } from './list-button-veiculo/list-button-veiculo.component';

@NgModule({
  declarations: [
    FormularioRotaComponent,
    ButtonVeiculoComponent,
    ListButtonVeiculoComponent
  ],
  exports: [
    FormularioRotaComponent,
    CommonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule


  ]
})
export class FormulariosModule { }
