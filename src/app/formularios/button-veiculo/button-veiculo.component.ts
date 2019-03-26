import { Component, Input, HostListener, ViewEncapsulation, OnInit, } from '@angular/core';
import * as $ from 'jquery'
import { Rota } from '../rota';
import { EventEmitter } from 'events';

@Component({
  selector: 'tgt-button-veiculo',
  templateUrl: './button-veiculo.component.html',
  styleUrls: ['./button-veiculo.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class ButtonVeiculoComponent {

  constructor() {
  }

  @Input() url = ''
  @Input() categoria = ''
  @Input() descricao = ''
  event: EventEmitter
  
  changeClass(event) {
    let element = event.target
    $(`.${event.target.className}`).removeClass('btn-selecionado')
    $(element).addClass('btn-selecionado')
    $("#descricao").show().html(this.descricao)
  }

  @HostListener('changeDescription')
  changeDescription() {
    $(event.target).css({ background: '#003348' })
    $("#descricao").show()
    $("#descricao").html(this.descricao)
  }

  @HostListener('hideDescription')
  hideDescription(event) {
    var element = document.getElementsByClassName('btn-selecionado')
    $(event.target).css({ background: '#268BB5' })
    $("#descricao").html(element[0].attributes[2].value)
  }
}

