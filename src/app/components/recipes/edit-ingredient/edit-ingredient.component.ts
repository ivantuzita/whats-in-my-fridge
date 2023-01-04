import { ActivatedRoute, Router } from '@angular/router';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from './../ingredient/ingredient';
import { Component, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-ingredient',
  templateUrl: './edit-ingredient.component.html',
  styleUrls: ['./edit-ingredient.component.css']
})
export class EditIngredientComponent implements OnInit{

  ingredient: Ingredient = {
    id: 0,
    content: '',
    quantity: 0
  }

  constructor(
    private service: IngredientService,
    private router: Router,
    private route: ActivatedRoute){ }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((ingredient) => {
      this.ingredient = ingredient
    })
  }

  editIngredient(){
    this.service.edit(this.ingredient).subscribe(() => {
      this.router.navigate(['/listIngredients'])
    })
  }

  cancel(){
    this.router.navigate(['/listIngredients'])
  }

}
