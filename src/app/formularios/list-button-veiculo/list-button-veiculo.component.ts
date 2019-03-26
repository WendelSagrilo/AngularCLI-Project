import { Component, OnInit, HostListener } from '@angular/core';
import { Veiculo } from '../rota';
import * as $ from 'jquery'
@Component({
  selector: 'tgt-list-button-veiculo',
  templateUrl: './list-button-veiculo.component.html',
  styleUrls: ['./list-button-veiculo.component.css']
})
export class ListButtonVeiculoComponent implements OnInit {

  constructor() { }

  veiculos:Veiculo[] = []

  ngOnInit() {

    this.veiculos = [
      {
        categoria: '9',
        descricao: 'Moto',
        urlImg: 'https://pokemon.gameinfo.io/images/pokemon-go/025-00.png'
      },
      {
        categoria: '1',
        descricao: 'Carri',
        urlImg: 'https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/145-00.png?w=696&ssl=1'
      },
      {
        categoria: '2',
        descricao: 'Jolteon',
        urlImg: 'https://clipart.info/images/ccovers/1528080679Pokemon-PNG-HD.png'
      },
      {
        categoria: '3',
        descricao: 'Articuno',
        urlImg: 'https://img.pngio.com/articuno-shiny-male-female-articuno-png-256_256.png'
      },
      {
        categoria: '5',
        descricao: 'Gengar',
        urlImg: 'https://vignette.wikia.nocookie.net/pokemongo/images/f/f8/Gengar.png/revision/latest?cb=20180118141639'
      },
      {
        categoria: '6',
        descricao: 'Haunter',
        urlImg: 'https://pokemon.gameinfo.io/images/pokemon-go/093-00.png'
      },
      {
        categoria: '7',
        descricao: 'Gastly',
        urlImg: 'https://pokemon.gameinfo.io/images/pokemon-go/092-00.png'
      },
      {
        categoria: '8',
        descricao: 'Squirtle',
        urlImg: 'https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786718xxl59.png'
      },
      {
        categoria: '2',
        descricao: 'Bulbasaur',
        urlImg: 'https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527784579tobow.png'
      },
      {
        categoria: '2',
        descricao: 'Totodile',
        urlImg: 'https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527785346lxgr9.png'
      },
      {
        categoria: '2',
        descricao: 'Sandslash',
        urlImg: 'http://pngimg.com/uploads/pokemon/pokemon_PNG69.png'
      },
      {
        categoria: '2',
        descricao: 'Charizard',
        urlImg: 'http://pngimg.com/uploads/pokemon/pokemon_PNG147.png'
      },
      {
        categoria: '2',
        descricao: 'Flareon',
        urlImg: 'http://www.pngnames.com/files/4/Pokemon-PNG-Clipart.png'
      },
      {
        categoria: '2',
        descricao: 'Eevee',
        urlImg: 'https://webiconspng.com/wp-content/uploads/2017/09/Pokemon-PNG-Image-97643.png'
      },

    ]
    
  }
  ngAfterViewInit(){
    $(".img-veiculo")[3].setAttribute('class', 'img-veiculo btn-selecionado')
  }

}
