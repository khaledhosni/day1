import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private validCredentials = {
    email: 'admin@admin.com',
    password: '123',
  };

  login(email: string, password: string): Observable<boolean> {
    // Mock login logic (replace with actual API call)
    if (email === this.validCredentials.email && password === this.validCredentials.password) {
      localStorage.setItem('token', 'mock-token'); // Store a token or session info
      return of(true);
    }
    return of(false);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Check if user is logged in
  }

  logout() {
    localStorage.removeItem('token'); // Clear session
  }
}

// Single Source of Truth 