import { Injectable } from '@angular/core';
import { generate as genRandomWord } from 'random-words';
import { UserM } from '../models/user';
import { UserService } from './user.service';
import { Observable, map, take, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _url: string = 'http://localhost:3000/users';
  private _userRole: string = 'user';
  get userRole(): string {
    return this._userRole;
  }

  constructor(
    private userService: UserService,
    private http: HttpClient
  ) { }

  userIsAuthenticated(): boolean {
    return this.getAccessToken() ? true : false;
  }

  logIn(userData: UserM): Observable<boolean> {
    return this.userService.getUsers().pipe(
      map((usersList) => usersList.find((user) => (userData.username === user.username && userData.password === user.password))),
      tap((user) => {if(user) this.setAccessToken(user)}),
      map((user) => user ? true : false),
      take(1)
    );
  }

  logOut(): void {
    sessionStorage.removeItem('AS_access_token');
  }

  getUserRole(): string {
    const user = this.getUserInfo().role;
    return user;
  }

  private generateAccessToken(userInfo: UserM): string {
    return btoa(JSON.stringify(userInfo));
  }

  private setAccessToken(userInfo: UserM): void {
    const token: string = this.generateAccessToken(userInfo);
    sessionStorage.setItem('AS_access_token', token);
  }

  private getAccessToken(): string | null {
    return sessionStorage.getItem('AS_access_token');
  }

  private getUserInfo(): UserM {
    const token = this.getAccessToken();
    return token ? JSON.parse(atob(token)) : null;
  }
}
