import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from "rxjs";
import { AuthService } from './login-page/auth/auth.service';


@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        console.log(this.authService.getUser());

        if (this.authService.getUser() && (this.authService.getUser()?.role == 1 ||this.authService.getUser()?.role == 2)  )
            return true;

       this.router.navigate(['']);
       return false;
    }
}
