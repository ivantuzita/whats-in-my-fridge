import { ActivatedRoute } from '@angular/router';
import { IngredientService } from './../ingredient.service';
import { Ingredient } from './../ingredient/ingredient';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-ingredient',
  templateUrl: './delete-ingredient.component.html',
  styleUrls: ['./delete-ingredient.component.css']
})
export class DeleteIngredientComponent implements OnInit{

  ingredient: Ingredient = {
    id: 0,
    content: '',
    quantity: 0
  }

  constructor(
    private service: IngredientService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((ingredient) => {
      this.ingredient = ingredient
    })
  }

  deleteIngredient(){
    if(this.ingredient.id){
    this.service.delete(this.ingredient.id).subscribe(()=>{
      this.router.navigate(['/listIngredients'])
      })
    }
  }

  cancel(){
    this.router.navigate(['/listIngredients'])
  }

}
