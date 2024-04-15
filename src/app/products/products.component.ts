import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ApiProductsService } from '../services/api-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private _apiService: ApiProductsService) {}

  ngOnInit(): void {
    this._apiService
      .getAllProducts()
      .subscribe((data: IProduct[]) => (this.products = data));
  }
}
