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
  query = '?offset=0&limit=40';
  newQuery: string;
  pokemonId = 1;
  pageNumber = 1;

  public isCollapsed = true;

  constructor(private pokeService: PokedexService) { }

  ngOnInit(): void {
    this.getApi(this.query);
  }

  nextPage() {
    this.newQuery = this.pokedex.next.slice(33);
    this.getApi(this.newQuery);
    this.pageNumber++;
  }
  previousPage() {
    this.newQuery = this.pokedex.previous.slice(33);
    this.getApi(this.newQuery);
    this.pageNumber--;
  }

  getApi(query: string) {
    this.pokeService.getPokedex(query).subscribe(data =>{
      this.pokedex = data;
      console.log(this.pokedex);
    });
  }
}
