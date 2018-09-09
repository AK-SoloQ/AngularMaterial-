import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  public choix;
  public foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  public pizzaTypes: Food[] = [
    { value: 'p1', viewValue: 'Pizza Thon' },
    { value: 'p1', viewValue: 'Pizza 2' },
    { value: 'p1', viewValue: 'Pizza 3' },
  ];
  public steakTypes: Food[] = [
    { value: 'p1', viewValue: 'Steak Thon' },
    { value: 'p1', viewValue: 'Steak 2' },
    { value: 'p1', viewValue: 'Steak 3' },
  ];
  public tacosTypes: Food[] = [
    { value: 'p1', viewValue: 'tacos Thon' },
    { value: 'p1', viewValue: 'tacos Thon' },
    { value: 'p1', viewValue: 'tacos 2' },
    { value: 'p1', viewValue: 'tacos 3' },
  ];
  public types: Food[];

  onChange(item) {
    console.log( item );
    if (item === 'pizza-1' ) {
      this.types = this.pizzaTypes;
    }
    if ( item === 'tacos-2') {
      this.types = this.tacosTypes;
    }
    if (item === 'stick-0' ) {
      this.types = this.steakTypes;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
