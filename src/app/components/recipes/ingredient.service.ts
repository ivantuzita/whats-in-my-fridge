import { Ingredient } from './ingredient/ingredient';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private readonly API = 'http://localhost:3000/ingredients'
  constructor(private http: HttpClient) { }

  list(): Observable<Ingredient[]>{
    return this.http.get<Ingredient[]>(this.API)
  }

  create(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(this.API, ingredient)
  }

  delete(id: number): Observable<Ingredient> {
    const url = `${this.API}/${id}`
    return this.http.delete<Ingredient>(url)
  }

  getById(id: number): Observable<Ingredient> {
    const url = `${this.API}/${id}`
    return this.http.get<Ingredient>(url)
  }

}
