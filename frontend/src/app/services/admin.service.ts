import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAdminData(): Observable<{ message: string }> {
    
    const token = localStorage.getItem('token');
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<{ message: string }>(`${this.apiUrl}/admin/getAdminData`, { headers });
  }
}
