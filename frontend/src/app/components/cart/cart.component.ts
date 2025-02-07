import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { Product } from '../../interfaces/product.interface';

export interface Cart {
  id: number,
  idProduct: number,
  idUser: number,
  quantity: number,
  price: number,
  product: Product,
  isValidate: boolean,
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule],
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];
  total: number = 0;
  isCartValided: boolean = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // Récupérarer l'id user
    const payload = this.authService.getCurrentUserRole();
    console.log('Payload:', payload);
    
    const idUser = payload?.id;
    console.log('ID utilisateur:', idUser);

    this.cartService.getAllCarts(idUser).subscribe({
      next: (data) => {
        console.log('Panier récupéré:', data);

        if(data) {
          const cartItems: Cart[] = data;
          const isValidated = cartItems.some(cart => cart.isValidate === true)
          this.isCartValided = isValidated;        
        }
          this.cartItems = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération du panier:', err);
      }
    });
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }

  validateCart(): void {
    console.log('Validation du panier:', this.cartItems);
    
    this.cartService.validateCart(this.cartItems).subscribe({
      next: (data) => {
        console.log('Panier validé:');
        this.isCartValided = true;
      },
      error: (err) => {
        console.error('Erreur lors de la validation du panier:', err);
      }
    });
  }
}
