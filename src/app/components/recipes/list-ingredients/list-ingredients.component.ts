import { Ingredient } from './../ingredient/ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-ingredients',
  templateUrl: './list-ingredients.component.html',
  styleUrls: ['./list-ingredients.component.css']
})
export class ListIngredientsComponent implements OnInit{

  ingredientList: Ingredient[] = [];

  ngOnInit(): void {
    
  }
}
