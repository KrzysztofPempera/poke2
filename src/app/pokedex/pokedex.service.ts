import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokedex, Types, TypeFilter } from '../pokedex/pokemon.models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private readonly apiRoot = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getTypeFilter(id: number): Observable<TypeFilter>{
    return this.http.get<TypeFilter>(`${this.apiRoot}/type${id}"`);
  }

  getTypes(): Observable<Types>{
    return this.http.get<Types>(`${this.apiRoot}/type`);
  }

  getPokedex(query: string): Observable<Pokedex>{
    return this.http.get<Pokedex>(`${this.apiRoot}/pokemon${query}"`);
  }
}
