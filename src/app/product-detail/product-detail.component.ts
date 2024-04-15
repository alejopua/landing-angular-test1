import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ApiProductsService } from '../services/api-products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product?: IProduct;
  loading: boolean = true;
  color?: string;

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiProductsService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this._apiService
        .getProduct(Number(params['productId']))
        .subscribe((data: IProduct) => (this.product = data));

      this.color = (this.product?.price as number) > 300 ? 'red' : '';
      this.loading = false;
    });
  }
}
