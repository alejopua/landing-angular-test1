import { Component, OnInit } from '@angular/core';
import { IProducts } from '../models/product.model';
import { ApiProductsService } from '../services/api-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: IProducts[] = [];

  constructor(private _apiService: ApiProductsService) {}

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProducts[]) =>
      // this.products = data
      console.log(data)
    );
  }
}
