import { Injectable } from '@angular/core';
import { CookieService as NgxCookieService } from 'ngx-cookie-service';
import {enviroment} from "../../enviroment/service.enviroment";

@Injectable({
  providedIn: 'root',
})
export class CookieServiceUtil {
  constructor(private cookieService: NgxCookieService) {}

  setCookie(name: string, value: string, days: number = 1): void {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    this.cookieService.set(name, value, expirationDate, '/', enviroment.domain, false, 'Lax');
  }

  getCookie(name: string): string {
    return this.cookieService.get(name);
  }

  deleteCookie(name: string): void {
    this.cookieService.delete(name, '/', enviroment.domain);
  }

  clearCookie(): void {
    this.cookieService.deleteAll('/', enviroment.domain);
  }

  checkCookie(name: string): boolean {
    return this.cookieService.check(name);
  }
}
