import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService, JwtContent } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { Product } from '../../interfaces/product.interface';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, NgIf],
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  isLogin = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit() {
    if (this.authForm.invalid) return;
    console.log('Form submitted:', this.authForm.value);

    const { email, password } = this.authForm.value;
    
    if (this.isLogin) {
      (this.authService.login(email, password)).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.access_token);
          
          if(res.access_token) {
            const decoded = jwt_decode.jwtDecode(res.access_token);
            console.log('decoded token:', decoded);
            
            this.authService.setCurrentUser(decoded as JwtContent);
          }

          this.toastr.success('Connexion réussie');
          this.router.navigate(['/products']).then(() => {
          }).catch((err) => {
            console.error("❌ Erreur lors de la redirection:", err);
          });
        },
        error: (err) => {
          this.toastr.error('Identifiants invalides');
        },
      });
    } else {
      (this.authService.register(email, password)).subscribe({
        next: (res) => {
          console.log('Inscription réussie:', res);
          this.toastr.success('Inscription réussie');
        },
        error: (err) => {
          console.error('Erreur d’inscription:', err);
          this.toastr.error('Erreur lors de l’inscription');
        },
      });
    }
  }

  async ngOnInit() {
    // const data = await this.apiService.getData();
    const data = "coucou";
    console.log(data);
  }
}

