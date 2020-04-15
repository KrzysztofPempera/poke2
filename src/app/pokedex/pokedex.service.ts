import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokedex } from '../pokedex/pokemon.models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private readonly apiRoot = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokedex(query: string): Observable<Pokedex>{
    return this.http.get<Pokedex>(`${this.apiRoot}/pokemon${query}"`);
  }
}
