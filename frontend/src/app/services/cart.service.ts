import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../components/cart/cart.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:3000';
  private token: string | null;
  public headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token'),
    this.headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
  }

  getAllCarts(idUser?: number): Observable<Cart[]> {
    console.log('getProducts service');
    return this.http.get<Cart[]>(`${this.apiUrl}/cart/allcarts${idUser}`, {  headers: this.headers });
  }

//   deleteProduct(id: number): Observable<any> {
//     console.log('getProducts service');
//     return this.http.delete(`${this.apiUrl}/products/deleteproduct${id}`);
//   }

  createCart(idUser: number, idProduct: number, quantity: number): Observable<Cart> {
    return this.http.post<Cart>(`${this.apiUrl}/cart/createcart`, { idUser, idProduct, quantity }, {  headers: this.headers });	
  }

  validateCart(cartItems: Cart[]): Observable<any> {
    console.log('validateCart service');
    return this.http.post(`${this.apiUrl}/cart/validatecart`, cartItems);
  }
}
