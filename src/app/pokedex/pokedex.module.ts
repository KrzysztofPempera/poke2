import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexService } from './pokedex.service';
import {RouterModule, Routes} from '@angular/router';
import { CardDisplayComponent } from './card-display/card-display.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FiltersComponent } from './filters/filters.component';
import { FilteredDisplayComponent } from './filtered-display/filtered-display.component';
import { FilteredDisplayResolver } from './filtered-display/filtered-display.resolver';
export interface FilteredTypeName {
  name: string;
}
const routes: Routes = [];
@NgModule({
  declarations: [SearchComponent, DetailsComponent, DataDisplayComponent, CardDisplayComponent, FiltersComponent, FilteredDisplayComponent],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PokedexService,
    FilteredDisplayResolver
  ]
})
export class PokedexModule { }
