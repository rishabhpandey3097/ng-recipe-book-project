import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediant[] = [
    new Ingrediant('Apples', 5),
    new Ingrediant('Orange', 10),
    new Ingrediant('Tomatos', 15),
  ];

  constructor() {}

  ngOnInit(): void {}
}
