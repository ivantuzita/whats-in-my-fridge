import { Router } from '@angular/router';
import { IngredientService } from './../ingredient.service';
import { Ingredient } from './../ingredient/ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html',
  styleUrls: ['./new-ingredient.component.css']
})
export class NewIngredientComponent implements OnInit{

  ingredient: Ingredient = {
    id: 0,
    content: '',
    quantity: undefined
  }

  constructor(
    private service: IngredientService,
    private router: Router
    ){

  }

  ngOnInit(): void {
    
  }

  createIngredient() {
    this.service.create(this.ingredient).subscribe(() =>{
      this.router.navigate(['/listIngredients'])
    })
  }
}
