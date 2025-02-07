import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';
  private token: string | null;
  public headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token'),
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  }

  
  getProducts(): Observable<Product[]> {
    console.log('getProducts service');
    return this.http.get<Product[]>(`${this.apiUrl}/products/allproducts`, {  headers: this.headers });
  }

  deleteProduct(id: number): Observable<any> {
    console.log('getProducts service');
    return this.http.delete(`${this.apiUrl}/products/deleteproduct${id}`, {  headers: this.headers });
  }

  // Méthode pour créer un nouveau produit
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/products/createproduct`, product, {  headers: this.headers });
  }

  // Méthode pour mettre à jour un produit existant
  updateProduct(id: number, product: Partial<Product>): Observable<Product> {
    
    return this.http.put<Product>(`${this.apiUrl}/products/updateproduct${id}`, product, {  headers: this.headers });
  }
}
