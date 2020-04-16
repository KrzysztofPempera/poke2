import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PokemonDetails, Sprites, Type, Ability } from '../pokemon.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  pokemon: PokemonDetails;
  pokemonName: string;
  pokemonId: number;
  pokemonImg: Sprites;
  pokemonType: Type[];
  pokemonAbilities: Ability[];
  pokemonHeight: number;
  pokemonWeight: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.pokemon = this.route.snapshot.data.details;
    this.pokemonName = this.pokemon.name[0].toUpperCase() + this.pokemon.name.slice(1);
    this.pokemonId = this.pokemon.id;
    this.pokemonImg = this.pokemon.sprites;
    this.pokemonType = this.pokemon.types;
    this.pokemonAbilities = this.pokemon.abilities;
    this.pokemonHeight = this.pokemon.height;
    this.pokemonWeight = this.pokemon.weight;
  }

}
