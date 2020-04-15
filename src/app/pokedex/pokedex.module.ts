import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexService } from './pokedex.service';
import {RouterModule, Routes} from '@angular/router';
import { CardDisplayComponent } from './card-display/card-display.component';
export interface DataDetailsId {
  id: string;
}

const routes: Routes = [];
@NgModule({
  declarations: [SearchComponent, DetailsComponent, DataDisplayComponent, CardDisplayComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PokedexService
  ]
})
export class PokedexModule { }
