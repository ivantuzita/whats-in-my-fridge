import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewIngredientComponent } from './recipes/new-ingredient/new-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewIngredientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
