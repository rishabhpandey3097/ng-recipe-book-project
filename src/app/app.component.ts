import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  recipeClicked = false;
  shoppingListClicked = false;

  recipeTemplate($event) {
    this.recipeClicked = $event;
  }

  shoppingTemplate($event) {
    this.shoppingListClicked = $event;
    console.log(this.shoppingListClicked);
  }
}
