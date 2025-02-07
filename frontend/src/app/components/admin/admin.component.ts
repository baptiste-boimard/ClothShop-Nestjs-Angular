import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CommonModule,  } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [CommonModule, FormsModule],

})
export class AdminComponent implements OnInit {
  adminMessage: string = '';
  products: Product[] = [];
  
  constructor(
    private adminService: AdminService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.adminService.getAdminData().subscribe({
      next: (res) => {
        console.log('✅ Données admin reçues:', res);
        this.adminMessage = res.message;
      },
      error: (err) => {
        console.error('❌ Erreur lors de la récupération des données admin:', err);
      }
    });

    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des produits", err);
      }
    });
  }

  deleteProduct(product: Product): void {
    if (confirm(`Voulez-vous vraiment supprimer le produit "${product.name}" ?`)) {
      this.productService.deleteProduct(product.id).subscribe({
        next: (res) => {
          // Mettre à jour la liste des produits après suppression
          this.products = this.products.filter(p => p.id !== product.id);
          console.log(`Produit ${product.id} supprimé avec succès.`);
        },
        error: (err) => {
          console.error("Erreur lors de la suppression du produit", err);
        }
      });
    }
  }

  // Crée un nouveau produit vide en mode édition
  onAddProduct(): void {
    const newProduct: Product = {
      id: 0, // Vous pouvez laisser 0, l'API devra générer un ID
      name: '',
      description: '',
      price: 0,
      stock: 0,
      urlimage: '',
      editMode: true,
      selectedQuantity: 0
    };
    // Ajoute en début de liste ou en fin, selon vos besoins
    this.products.unshift(newProduct);
  }

  // Sauvegarder le produit (exemple : envoi au backend)
  saveProduct(product: Product): void {
    // Ici, vous devez appeler votre service pour créer ou mettre à jour le produit.
    // Par exemple, si l'ID est 0, c'est un nouveau produit à créer
    if (product.id === 0) {
      this.productService.createProduct(product).subscribe({
        next: (createdProduct) => {
          // Mettez à jour le produit dans la liste avec l'ID généré et désactivez le mode édition
          Object.assign(product, createdProduct);
          product.editMode = false;
        },
        error: (err) => {
          console.error("Erreur lors de la création du produit", err);
        }
      });
    } else {
      // Sinon, c'est une mise à jour d'un produit existant
      console.log("Mise à jour du produit", product);
      
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

  // Annuler l'édition d'un produit
  cancelEdit(product: Product): void {
    if (product.id === 0) {
      // Si c'est un nouveau produit, le retirer de la liste
      this.products = this.products.filter(p => p !== product);
    } else {
      // Pour un produit existant, vous pouvez recharger les données depuis le serveur ou remettre les anciennes valeurs.
      product.editMode = false;
      // Optionnel : recharger le produit depuis le serveur
    }
  }
}
