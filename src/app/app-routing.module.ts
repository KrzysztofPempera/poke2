import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DataDisplayComponent } from './pokedex/data-display/data-display.component';
import { DetailsComponent } from './pokedex/details/details.component';
import { FilteredDisplayComponent} from './pokedex/filtered-display/filtered-display.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'pokedex',
        children: [
      {
        path: '',
        component: DataDisplayComponent
      },
      {
        path: ':id',
        component: DetailsComponent
      },
      {
        path: 'type/:name',
        component: FilteredDisplayComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
