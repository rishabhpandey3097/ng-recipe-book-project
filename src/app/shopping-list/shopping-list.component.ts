import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediant[];

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingrediants = this.shoppingService.getIngrediants();
  }

  addIngrediant(event: Ingrediant) {
    this.ingrediants.push(event);
  }
}
