import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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
  constructor() {}

  ngOnInit(): void {}
}
