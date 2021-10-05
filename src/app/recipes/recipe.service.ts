import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'French Omlete',
      'Yummy omlete!',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'
    ),
    new Recipe(
      'Babaji ka special',
      'Kuch toh hain!',
      'https://static.toiimg.com/thumb/68615405.cms?width=571&height=382&imgsize=79886'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
