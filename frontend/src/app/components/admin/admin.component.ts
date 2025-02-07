import { Component, OnInit } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],

})
export class AdminComponent implements OnInit {
  products: Product[] = [];
  isAdmin: boolean = false;
  totalSales: number = 0;
  mostSoldProduct?: Product;
  
  constructor(
    private productService: ProductService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;

        this.totalSales = data.reduce((acc, product) => acc + product.stock, 0);
        this.mostSoldProduct = data.reduce((maxProduct, currentProduct) => {
          return currentProduct.saled > maxProduct.saled ? currentProduct : maxProduct;
        }, data[0]);
        
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des produits", err);
      }
    });

    const payload = this.authService.getCurrentUserRole();
    this.isAdmin = payload?.role === 'admin';
  }

  deleteProduct(product: Product): void {
    if (confirm(`Voulez-vous vraiment supprimer le produit "${product.name}" ?`)) {
      this.productService.deleteProduct(product.id).subscribe({
        next: (res) => {
          // Mettre à jour la liste des produits après suppression
          this.products = this.products.filter(p => p.id !== product.id);
        },
        error: (err) => {
          console.error("Erreur lors de la suppression du produit", err);
        }
      });
    }
  }

  onAddProduct(): void {
    const newProduct: Product = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      stock: 0,
      urlimage: '',
      editMode: true,
      selectedQuantity: 0,
      saled: 0
    };
    this.products.unshift(newProduct);
  }

  saveProduct(product: Product): void {
    if (product.id === 0) {
      this.productService.createProduct(product).subscribe({
        next: (createdProduct) => {
          Object.assign(product, createdProduct);
          product.editMode = false;
        },
        error: (err) => {
          console.error("Erreur lors de la création du produit", err);
        }
      });
    } else {      
      this.productService.updateProduct(product.id, product).subscribe({
        next: (updatedProduct) => {
          Object.assign(product, updatedProduct);
          product.editMode = false;
        },
        error: (err) => {
          console.error("Erreur lors de la mise à jour du produit", err);
        }
      });
    }
  }

  cancelEdit(product: Product): void {
    if (product.id === 0) {
      this.products = this.products.filter(p => p !== product);
    } else {
      product.editMode = false;
    }
  }
}
