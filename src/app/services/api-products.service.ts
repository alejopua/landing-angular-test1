import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProducts } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) {}

  public getAllProducts(): Observable<IProducts[]> {
    return this._httpClient.get<IProducts[]>(this.baseUrl);
  }

  public getProduct(id: number | string): Observable<IProducts> {
    return this._httpClient.get<IProducts>(`${this.baseUrl}/${id}`);
  }

  public getCategories(): Observable<Category[]> {
    return this._httpClient.get<Category[]>(`${this.baseUrl}/categories`);
  }

  public postProduct(product: IProducts): Observable<IProducts> {
    return this._httpClient.post<IProducts>(`${this.baseUrl}`, product);
  }
}
