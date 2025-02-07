import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    console.log('getProducts service');
    return this.http.get<Product[]>(`${this.apiUrl}/products/allproducts`);
  }

  deleteProduct(id: number): Observable<any> {
    console.log('getProducts service');
    return this.http.delete(`${this.apiUrl}/products/deleteproduct${id}`);
  }

  // Méthode pour créer un nouveau produit
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/products/createproduct`, product);
  }

  // Méthode pour mettre à jour un produit existant
  updateProduct(id: number, product: Partial<Product>): Observable<Product> {
    
    return this.http.put<Product>(`${this.apiUrl}/products/updateproduct${id}`, product);
  }
}
