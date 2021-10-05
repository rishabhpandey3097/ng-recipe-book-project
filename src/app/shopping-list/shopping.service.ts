import { Injectable } from '@angular/core';

import { Ingrediant } from '../shared/ingrediant.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private ingrediants: Ingrediant[] = [
    new Ingrediant('Apples', 5),
    new Ingrediant('Orange', 10),
    new Ingrediant('Tomatos', 15),
  ];

  getIngrediants() {
    return this.ingrediants.slice();
  }
}
