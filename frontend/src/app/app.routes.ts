import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { CartComponent } from './components/cart/cart.component';

export const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'cart', component: CartComponent,  canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },
  { path: 'products', component: ProductsComponent },
  // redirige vers /auth si l'URL est vide
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  // redirige toute route non reconnue vers /auth
  { path: '**', redirectTo: '/auth' }
];