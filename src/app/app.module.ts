import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewIngredientComponent } from './components/recipes/new-ingredient/new-ingredient.component';
import { ListIngredientsComponent } from './components/recipes/list-ingredients/list-ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewIngredientComponent,
    ListIngredientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
