import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokedex } from '../pokedex/pokemon.models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private readonly apiRoot = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<Pokedex>{
    return this.http.get<Pokedex>(this.apiRoot);
  }
}
