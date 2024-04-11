import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Broom',
      price: 10,
      description: 'A great broom for sweeping',
    },
    {
      id: 2,
      name: 'Mop',
      price: 15,
      description: 'A great mop for mopping',
    },
    {
      id: 3,
      name: 'Duster',
      price: 5,
      description: 'A great duster for dusting',
    },
    {
      id: 4,
      name: 'Sponge',
      price: 2,
      description: 'A great sponge for sponging',
    },
  ];
}
