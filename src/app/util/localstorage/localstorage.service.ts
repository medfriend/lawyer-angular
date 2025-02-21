import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {CookieServiceUtil} from "../cookie/cookie.service";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(
      private cookieService: CookieServiceUtil,
      @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  setItem(key: string, value: any): void {
    const stringValue = JSON.stringify(value);
    if (isPlatformBrowser(this.platformId)) {
      this.cookieService.setCookie(key, stringValue);
      localStorage.setItem(key, stringValue);
    }
  }

  getItem<T>(key: string): T | null {
    if (isPlatformBrowser(this.platformId)) {
      let item = localStorage.getItem(key);
      if (item === null) {
        item = this.cookieService.getCookie(key);
      }
      return item ? JSON.parse(item) : null;
    }
    return null;
  }

  removeItem(key: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
      this.cookieService.clearCookie();
    }
  }
}