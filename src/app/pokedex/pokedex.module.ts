import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { DataDisplayComponent } from './data-display/data-display.component';



@NgModule({
  declarations: [SearchComponent, DetailsComponent, DataDisplayComponent],
  imports: [
    CommonModule
  ]
})
export class PokedexModule { }
