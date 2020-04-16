import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexDetails } from '../pokemon.models';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css']
})
export class CardDisplayComponent implements OnInit {

  @Input() pokemon: PokedexDetails;
  pokemonName: string;
  pokemonUrl: string;
  pokemonId: number;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemonName = this.pokemon.name[0].toUpperCase() + this.pokemon.name.slice(1);
    this.pokemonUrl = this.pokemon.url;
    this.pokemonId = Number(this.pokemonUrl.slice(34, -1));
  }
}
