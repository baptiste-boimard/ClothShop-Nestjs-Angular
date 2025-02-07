import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interfaces/token.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  private apiUrl = 'http://localhost:3000';

  async getData() {
    const response = await axios.get(`${this.apiUrl}/data`);
    return response.data;
  }

  async login(email: string, password: string): Promise<Observable<AuthResponse>> {
    return await axios.post(`${this.apiUrl}/auth/login`, { email, password });
  }

  async register(email: string, password: string): Promise<Observable<AuthResponse>> {
    return await axios.post(`${this.apiUrl}/auth/register`, { email, password });
  }

}
