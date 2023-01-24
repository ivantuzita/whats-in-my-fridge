import { ListRecipesComponent } from './components/recipes/list-recipes/list-recipes.component';
import { EditIngredientComponent } from './components/recipes/edit-ingredient/edit-ingredient.component';
import { DeleteIngredientComponent } from './components/recipes/delete-ingredient/delete-ingredient.component';
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
  },
  {
    path: 'listRecipes',
    component: ListRecipesComponent
  },
  {
    path: 'ingredients/deleteIngredient/:id',
    component: DeleteIngredientComponent
  },
  {
    path: 'ingredients/editIngredient/:id',
    component: EditIngredientComponent
  }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule {}