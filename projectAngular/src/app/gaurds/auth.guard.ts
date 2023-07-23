import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { StorageService } from './../_services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( public router: Router,
    private token: StorageService,
    private authService:AuthService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     {
      if (this.token.isLoggedIn()){
        const userRole = this.authService.getRole();
       // const { roles } = next.data;
        if (next.data.role && next.data.role.indexOf(userRole) === -1) {
         // this.router.navigate(['/home']);
         alert('Access denied You do not have role ');
         this.router.navigate(['/home']);
          return false;
        }
        return true;
      }
   // not logged in so redirect to login page with the return url
   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
   return false;
  }


}
