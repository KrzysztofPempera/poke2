import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Pokedex, PokedexDetails } from '../pokemon.models';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  pokedex: Pokedex;
  //pokemonId: number;

  constructor(private pokeService: PokedexService) { }

  ngOnInit(): void {
    this.pokeService.getPokemon().subscribe(data =>{
      this.pokedex = data;
      console.log(this.pokedex);
    });
  }
//   changeId(): void {
//     this.pokemonId++;
//   }
}
