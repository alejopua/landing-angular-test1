import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) {}

  public getAllProducts(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(this.baseUrl);
  }

  public getProduct(id: number): Observable<IProduct> {
    return this._httpClient.get<IProduct>(`${this.baseUrl}/${id}`);
  }

  public getCategories(): Observable<Category[]> {
    return this._httpClient.get<Category[]>(`${this.baseUrl}/categories`);
  }

  public postProduct(product: IProduct): Observable<IProduct> {
    return this._httpClient.post<IProduct>(`${this.baseUrl}`, product);
  }

  public updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this._httpClient.post<IProduct>(`${this.baseUrl}/${id}`, product);
  }

  public deleteProduct(id: number): Observable<IProduct> {
    return this._httpClient.delete<IProduct>(`${this.baseUrl}/${id}`);
  }
}
