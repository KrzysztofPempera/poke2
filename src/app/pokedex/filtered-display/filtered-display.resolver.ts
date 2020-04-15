import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Pokemon} from '../pokemon.models';
import {PokedexService} from '../pokedex.service';
import {FilteredTypeName} from '../pokedex.module';

@Injectable()
export class FilteredDisplayResolver implements Resolve<Pokemon[]> {

  constructor(private pokedex: PokedexService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pokemon[]> {
    const {name} = route.params as FilteredTypeName;
    return this.pokedex.getTypeFilter(name);
  }

}
