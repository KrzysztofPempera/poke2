import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokedex, Types, TypeFilter, Pokemon, PokemonDetails } from '../pokedex/pokemon.models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private readonly apiRoot = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getTypeFilter(name: string): Observable<Pokemon[]>{
    return this.http.get<TypeFilter>(`${this.apiRoot}/type/${name}`)
    .pipe(
      map(response => response.pokemon)
    );

  }
  getTypes(): Observable<Types>{
    return this.http.get<Types>(`${this.apiRoot}/type`);
  }

  getPokedex(query: string): Observable<Pokedex>{
    return this.http.get<Pokedex>(`${this.apiRoot}/pokemon${query}"`);
  }

  getPokemon(id?: number, name?: string): Observable<PokemonDetails>{
    return this.http.get<PokemonDetails>(`${this.apiRoot}/pokemon/${id ? id : name}`);
  }
}
