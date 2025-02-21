import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {CookieServiceUtil} from "../../util/cookie/cookie.service";
import {userInfo} from "node:os";

@Injectable({
    providedIn: 'root'
})
export class CookieGuard implements CanActivate {

    constructor(private cookieService: CookieServiceUtil) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        const token = this.cookieService.getCookie('token')
        const userInfo = this.cookieService.getCookie('userInfo')

        if (token) {
            localStorage.setItem('token', token)
            localStorage.setItem('userInfo', userInfo)
        }

        //localStorage.setItem('userData', userData);

        return true; // o alguna lógica que determine si la ruta debe activarse
    }
}