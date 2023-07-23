import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// User interface
export class User {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // User registration
  register(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/register', user);
  }
  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/login', user);
  }

  // Forgot Pass
  forgot(email: string) {
    return this.http.post('http://localhost:8000/api/password/email', { email: email });
  }

  sendResetPasswordLink(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/auth/reset-password-request', data)
  }
  resetPassword(data: any) {
    return this.http.post(
      'http://127.0.0.1:8000/api/change-password',
      data
    );
  }
  getRole(){
    return localStorage.getItem('role');
  }
}
