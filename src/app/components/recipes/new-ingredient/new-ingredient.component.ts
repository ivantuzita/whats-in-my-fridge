import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html',
  styleUrls: ['./new-ingredient.component.css']
})
export class NewIngredientComponent implements OnInit{

  ingredient = {
    id: 0,
    content: '',
    quantity: null
  }

  constructor(){

  }

  ngOnInit(): void {
    
  }

  createIngredient() {
    alert("hey, it's working fine.")
  }
}
