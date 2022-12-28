import { ListIngredientsComponent } from './components/recipes/list-ingredients/list-ingredients.component';
import { NewIngredientComponent } from './components/recipes/new-ingredient/new-ingredient.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listIngredients',
    pathMatch: 'full'
  },
  {
    path: 'createIngredient',
    component: NewIngredientComponent
  },
  {
    path: 'listIngredients',
    component: ListIngredientsComponent
  }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule {}