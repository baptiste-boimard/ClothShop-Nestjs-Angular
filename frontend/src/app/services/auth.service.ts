import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthResponse } from '../interfaces/token.interface';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { JwtPayload } from 'jwt-decode';

export interface JwtContent {
  id: number;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  private apiUrl = 'http://localhost:3000';
  private currentPayloadSubject = new BehaviorSubject<JwtContent | null>(null);
  
  login(email: string, password: string): Observable<AuthResponse> {
    console.log('login service', email, password);
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, { email, password });
     
  }

  register(email: string, password: string): Observable<AuthResponse> {
    console.log('register service', email, password);
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/register`, { email, password });
  }

  setCurrentUser(payload: JwtContent) {
    this.currentPayloadSubject.next(payload);
    console.log('currentPayloadSubject:', this.currentPayloadSubject);
    
  }

  getCurrentUserRole(): JwtContent | null {
    console.log('currentPayloadSubject:', this.currentPayloadSubject);
    
    const payload = this.currentPayloadSubject.value;
    return payload ? payload : null;
  }
}
