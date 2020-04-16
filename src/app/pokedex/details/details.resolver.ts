import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PokemonDetails} from '../pokemon.models';
import {PokedexService} from '../pokedex.service';
import {DetailsId} from '../pokedex.module';

@Injectable()
export class DetailsResolver implements Resolve<PokemonDetails> {

  constructor(private pokedex: PokedexService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PokemonDetails> {
    const {id} = route.params as DetailsId;
    console.log(route.params);
    return this.pokedex.getPokemon(id);
  }

}
