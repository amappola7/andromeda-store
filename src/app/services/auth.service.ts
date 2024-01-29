import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _url: string = 'http://localhost:3000/users';

  constructor() { }

  userIsAuthenticated(): boolean {
    return false;
  }

  logOut(): void {
    sessionStorage.removeItem('AS_access_token');
  }
}
