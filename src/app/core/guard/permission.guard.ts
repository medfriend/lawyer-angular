import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {StorageService} from "../../util/localstorage/localstorage.service";
import {AuthData} from "../interfaces/services/localstorage.service";
import {AuthService} from "../service/md-security/auth.service";


@Injectable({
  providedIn: 'root',
})
export class PermissionsGuard implements CanActivate {
  constructor(
    private localstorageService: StorageService,
    private router: Router,

  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const userInfo: AuthData | null = this.localstorageService.getItem("userInfo");

    const fullUrl = route.pathFromRoot
      .map(segment => segment.url.map(s => s.path).join('/'))
      .join('/');

    let hasRoute = false

    if (userInfo) {
      userInfo.menus.forEach(menu => {
        menu.submenus.forEach((submenu) => {
          if (fullUrl.startsWith(submenu.route)) {
            hasRoute = true;
          }
        })
      })
    }

    //TODO agregar una toastada que no tienes permiso para acceder a esa vista
    return true;
    //return hasRoute;
  }
}
