import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

import { Admin } from '../admin/admin';

@Injectable()
export class AdminGuard implements CanActivate {
  // bean = new Admin();
  bean: Admin = new Admin();

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      alert("Can Activate");
      // redirect and return false
      if (this.auth.isLoggedIn) 
      { return true; }
    this.router.navigate(['/admin/login']);
    return false;

  }
}
