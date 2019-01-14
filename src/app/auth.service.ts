import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  getToken() {
    return localStorage.getItem("token")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["login"]);
  }
}
