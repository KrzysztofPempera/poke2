import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DataDisplayComponent } from './pokedex/data-display/data-display.component';
import { DetailsComponent } from './pokedex/details/details.component';
import { FilteredDisplayComponent} from './pokedex/filtered-display/filtered-display.component';
import { FilteredDisplayResolver } from './pokedex/filtered-display/filtered-display.resolver';
import { DetailsResolver } from './pokedex/details/details.resolver';
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
        component: DetailsComponent,
        resolve: {
          details: DetailsResolver
        }
      },
      {
        path: 'type/:name',
        component: FilteredDisplayComponent,
        resolve: {
          type: FilteredDisplayResolver
        }
      },
      {
        path: 'type/:name/:id',
        redirectTo: '/pokedex/:id',
        pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false, enableTracing: false})],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
