import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery'
import { Rota } from '../rota';

@Component({
  selector: 'tgt-button-veiculo',
  templateUrl: './button-veiculo.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./button-veiculo.component.css'],

})
export class ButtonVeiculoComponent implements OnInit {

  constructor() {
  }

  veiculo = []

  ngOnInit() {

    this.veiculo =
      [
        {
          categoria: '19',
          descricao: 'Moto',
          urlImg: 'http://blaster3.net/img/stuff/tos/fashion/hairacc_38_lionmask2.png'
        },
        {
          categoria: '1',
          descricao: 'carro',
          urlImg: 'http://blaster3.net/img/stuff/tos/fashion/hairacc_38_lionmask2.png'
        },
        {
          categoria: '2',
          descricao: 'kombi',
          urlImg: 'http://blaster3.net/img/stuff/tos/fashion/hairacc_38_lionmask2.png'
        },
        {
          categoria: '3',
          descricao: 'Kombi com carroça',
          urlImg: 'http://blaster3.net/img/stuff/tos/fashion/hairacc_38_lionmask2.png'
        },
        {
          categoria: '4',
          descricao: 'Kombi com carroça',
          urlImg: 'http://blaster3.net/img/stuff/tos/fashion/hairacc_38_lionmask2.png'
        },
        {
          categoria: '5',
          descricao: 'Kombi com carroça',
          urlImg: 'http://blaster3.net/img/stuff/tos/fashion/hairacc_38_lionmask2.png'
        },
        {
          categoria: '6',
          descricao: 'Kombi com carroça',
          urlImg: 'http://blaster3.net/img/stuff/tos/fashion/hairacc_38_lionmask2.png'
        },
        {
          categoria: '7',
          descricao: 'Kombi com carroça',
          urlImg: 'http://blaster3.net/img/stuff/tos/fashion/hairacc_38_lionmask2.png'
        },
        {
          categoria: '8',
          descricao: 'Kombi com carroça',
          urlImg: 'http://blaster3.net/img/stuff/tos/fashion/hairacc_38_lionmask2.png'
        },
        {
          categoria: '9',
          descricao: 'Kombi com carroça',
          urlImg: 'http://blaster3.net/img/stuff/tos/fashion/hairacc_38_lionmask2.png'
        },
        {
          categoria: '11',
          descricao: 'Kombi com carroça',
          urlImg: 'http://blaster3.net/img/stuff/tos/fashion/hairacc_38_lionmask2.png'
        },
        {
          categoria: '12',
          descricao: 'Kombi com carroça',
          urlImg: 'http://blaster3.net/img/stuff/tos/fashion/hairacc_38_lionmask2.png'
        },
        {
          categoria: '13',
          descricao: 'Kombi com carroça',
          urlImg: 'http://blaster3.net/img/stuff/tos/fashion/hairacc_38_lionmask2.png'
        },
        {
          categoria: '14',
          descricao: 'Kombi com carroça',
          urlImg: 'http://blaster3.net/img/stuff/tos/fashion/hairacc_38_lionmask2.png'
        },
      ]

    let positionGrid = 0
    this.veiculo
      .forEach((v) => {
        let id = v.categoria
        let element = `
          <div id="${id}" class="btn-veiculo d-flex justify-content-center">
            <img src='${v.urlImg}' id="${v.categoria}Img" class="img-veiculo" data-categoria='${v.categoria}'/>
          </div>
      
          `

        if (positionGrid < 7)
          $("#boxBtn").append(element)
        else
          $("#boxBtn2").append(element)

        positionGrid++
      })


    $('.selectButton').click((event) => {
      event.preventDefault();

      let idName = event.target.id
      let isSelected = event.target
        .className
        .indexOf("btn-veiculo d-flex justify-content-center btn-selecionado")
      if (!!isSelected) {
        // this.tipoVeiculo.veiculo.categoria = event.target.value
        this.toggleClass(idName, false)
      }
    })


    $('.img-veiculo').click((event) => {
      // this.tipoVeiculo.veiculo.categoria = event.target.value
      this.toggleClass(event.target.id, true)
    })



  }
  toggleClass(idName, isImg) {
    var divBtn = $(`#${idName}`).parent();
    $(".btn-selecionado").removeClass('btn-selecionado')
    if (isImg)
      divBtn.addClass('btn-selecionado')
    else
      $(`#${idName}`).addClass('btn-selecionado')

  }
}

