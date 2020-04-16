import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PokemonDetails } from '../pokemon.models';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  pokemon: PokemonDetails;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemon = this.route.snapshot.data.details;
    console.log(this.pokemon);
  }

}
