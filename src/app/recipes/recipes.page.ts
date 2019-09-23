import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from './recipes.model'
import { RecipesService } from './recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  private recipesSub: Subscription
  recipes: Recipe[]

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.onGetAllRecipe()
  }

  ionViewWillEnter() {
    this.onGetAllRecipe()
  }

  onGetAllRecipe() {
    this.recipesSub = this.recipesService.recipesChanged.subscribe(rcp => {
      this.recipes = rcp
    })
    this.recipesService.getAll()
  }

  ngOnDestroy() {
    this.recipesSub.unsubscribe()
  }

}
