import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router, private AuthService: AuthService) { }

  canActivate() {
    let user = this.AuthService.currentUser;
    if (user && this.AuthService.currentUser.admin) return true;
    this.router.navigate(['/no-access']);
    return false;
  }
}
