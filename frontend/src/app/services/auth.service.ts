import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthResponse } from '../interfaces/token.interface';
import { HttpClient } from '@angular/common/http';


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
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, { email, password });
  }

  register(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/register`, { email, password });
  }

  setCurrentUser(payload: JwtContent) {
    this.currentPayloadSubject.next(payload);    
  }

  getCurrentUserRole(): JwtContent | null {   
    const payload = this.currentPayloadSubject.value;
    return payload ? payload : null;
  }
}
