import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule, FormsModule],
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('200ms ease-in')
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isAdmin: boolean = false;
  selectedQuantity: number = 0;
  
  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private cart: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des produits", err);
      }
    });

    const payload = this.authService.getCurrentUserRole();
    this.isAdmin = payload?.role === 'admin';    
  }

  navigateToAdmin(): void {
    this.router.navigate(['/admin']);
  }

  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }

  addToCart(product: Product): void {
    const payload = this.authService.getCurrentUserRole();
    const idUser = payload?.id;
    const idProduct = product.id;
    const quantity = product.selectedQuantity;

    if(idUser != undefined) {
      this.cart.createCart(idUser, idProduct, quantity).subscribe({
        next: (data) => {
          console.log('Produit ajouté au panier:', data);
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout au panier:', err);
        }
      });  
    }
      
  }
}
