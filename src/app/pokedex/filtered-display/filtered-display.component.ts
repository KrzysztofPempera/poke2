import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PokedexService } from '../pokedex.service';
import { TypeFilter } from '../pokemon.models';

@Component({
  selector: 'app-filtered-display',
  templateUrl: './filtered-display.component.html',
  styleUrls: ['./filtered-display.component.css']
})
export class FilteredDisplayComponent implements OnInit {

  type: string;
  filteredData: TypeFilter;

  constructor(private pokeService: PokedexService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.data.type.url;
    console.log(this.type);
  }

}
