import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewIngredientComponent } from './components/recipes/new-ingredient/new-ingredient.component';
import { ListIngredientsComponent } from './components/recipes/list-ingredients/list-ingredients.component';
import { IngredientComponent } from './components/recipes/ingredient/ingredient.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteIngredientComponent } from './components/recipes/delete-ingredient/delete-ingredient.component';
import { EditIngredientComponent } from './components/recipes/edit-ingredient/edit-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewIngredientComponent,
    ListIngredientsComponent,
    IngredientComponent,
    DeleteIngredientComponent,
    EditIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
