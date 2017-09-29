import { Component } from '@angular/core';

/**
 * Generated class for the CustomerListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'customer-list',
  templateUrl: 'customer-list.html'
})
export class CustomerListComponent {

  text: string;

  constructor() {
    console.log('Hello CustomerListComponent Component');
    this.text = 'Hello World';
  }

}
