import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PokemonDetails} from '../pokemon.models';
import {PokedexService} from '../pokedex.service';
import {DetailsQuery} from '../pokedex.module';

@Injectable()
export class DetailsResolver implements Resolve<PokemonDetails> {

  constructor(private pokedex: PokedexService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PokemonDetails> {
    if (route.params.id){
      const {id} = route.params as DetailsQuery;
      return this.pokedex.getPokemon(id);
    }

  }

}
