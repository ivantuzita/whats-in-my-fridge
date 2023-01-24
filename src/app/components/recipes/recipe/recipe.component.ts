import { Component, Input } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {

  @Input() recipe: Recipe = {
    id: 0,
    name: 'Caprese Salad',
    ingredients: {
      content: 'Tomato',
      quantity: 7
    }
  }
}
