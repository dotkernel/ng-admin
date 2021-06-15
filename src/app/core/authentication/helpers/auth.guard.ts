import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {AuthService} from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const tokenData = this.authenticationService.tokenData;
    if (tokenData) {
      const TOKEN_EXPIRE = tokenData.expires_in * 1000;
      if ((new Date().getTime() - tokenData.timestamp) > TOKEN_EXPIRE) {
        this.authenticationService.logout();
        return false;
      }
      // logged in an token not expired so return true
      return true;
    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }
}
