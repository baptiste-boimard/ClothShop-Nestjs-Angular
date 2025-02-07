import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    if (decodedToken.role !== 'admin') {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
