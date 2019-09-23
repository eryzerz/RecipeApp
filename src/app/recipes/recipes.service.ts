import { Injectable } from '@angular/core';

import { Recipe } from './recipes.model'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>()
  recipes: Recipe[] = [
    {
      id: '1',
      title: 'Martabak Manis',
      imageUrl: 'https://cdn0-production-images-kly.akamaized.net/jxg9aEXB6aTrjDmcLmiq1QpoLsg=/680x383/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2526959/original/071062500_1544648799-resep-martabak-manis-praktis-tanpa-telur-anti-gagal.jpg',
      ingredients: ['Tepung', 'Telur', 'Gula', 'Susu']
    },
    {
      id: '2',
      title: 'Burrito',
      imageUrl: 'https://cdn-image.foodandwine.com/sites/default/files/1485444783/el-camion-best-burritos-FT-SS1216.jpg',
      ingredients: ['Tortilla', 'Meat', 'Tomato', 'French Fries', 'Mayo']
    }
  ]
  constructor() { }

  getAll() {
    this.recipesChanged.next(this.recipes)
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => (
      recipe.id === recipeId
    ))}
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId
    })
  }

}
