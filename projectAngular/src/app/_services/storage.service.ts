import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  public saveDataToLocalhost(data: any): void {
    const keys = Object.keys(data);
    keys.forEach((key: string) => {
      localStorage.setItem(key, data[key]);
    });
  }
  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
  }

  public isLoggedIn(): boolean {
    const user = localStorage.getItem('token');
    if (user) {
      return true;
    }

    return false;
  }
  getToken() {
    return localStorage.getItem('token');
  }
  removeToken() {
    localStorage.removeItem('token');
  }
  
}
