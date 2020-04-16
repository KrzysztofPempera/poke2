import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PokedexService } from '../pokedex.service';
import { Pokemon, Pokemon2 } from '../pokemon.models';

@Component({
  selector: 'app-filtered-display',
  templateUrl: './filtered-display.component.html',
  styleUrls: ['./filtered-display.component.css']
})
export class FilteredDisplayComponent implements OnInit {

  filteredData: Pokemon[];
  pokemonList: Pokemon2[];
  totalPages: number;
  pageNumber = 1;
  pageLimit = 40;

  constructor(private pokeService: PokedexService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.filteredData = this.route.snapshot.data.type;
    this.totalPages = this.getTotalPages();
    this.pokemonList = this.getPage(this.pageNumber);
  }
  getNextPage(){
    if (this.pageNumber !== this.totalPages) {
      this.pageNumber++;
      this.pokemonList = this.getPage(this.pageNumber);
    }
  }
  getPreviousPage(){
    if (this.pageNumber !== 1) {
      this.pageNumber--;
      this.pokemonList = this.getPage(this.pageNumber);
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.filteredData.length / 40);
  }

  getPage(pageNumber: number): Pokemon2[] {
    let index = ((pageNumber - 1) * this.pageLimit);
    if (pageNumber !== this.totalPages){
      const testArray: Pokemon2[] = new Array(this.pageLimit);
      for (let i = 0; i < this.pageLimit; i++, index++) {
        testArray[i] = this.filteredData[index].pokemon;
      }
      return testArray;
    }
    else if (pageNumber === this.totalPages) {
      const pageLimit = this.filteredData.length % this.pageLimit;
      const testArray: Pokemon2[] = new Array(pageLimit);
      for (let i = 0; i < pageLimit; i++, index++) {
        testArray[i] = this.filteredData[index].pokemon;
      }
      return testArray;
    }
  }
}
