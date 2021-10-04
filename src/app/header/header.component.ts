import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  signalRecipe = true;
  signalShopping = true;

  @Output() recipeClicked = new EventEmitter<boolean>();
  @Output() shoppingClicked = new EventEmitter<boolean>();

  displayRecipe() {
    this.recipeClicked.emit(this.signalRecipe);
    console.log('recipe clicked');
  }

  displayShopping() {
    this.shoppingClicked.emit(this.signalShopping);
    console.log('shopping clicked');
  }
}
