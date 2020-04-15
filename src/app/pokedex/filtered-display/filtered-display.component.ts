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
  pokemon: Pokemon2;

  constructor(private pokeService: PokedexService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.filteredData = this.route.snapshot.data.type;
    this.pokemon = this.filteredData[0].pokemon;
    console.log(this.pokemon);
  }

}
