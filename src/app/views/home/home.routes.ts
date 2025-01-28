import {Routes} from "@angular/router";
import {HomeComponent} from "./views/main/home.component";
import {ParentMenuComponent} from "./views/main/components/parent-menu/parent-menu.component";
import {USER_ROUTE} from "./views/user/user.route";
import {MANTENIMIENTO_ROUTE} from "../../feature/mantenimiento/mantenimiento.route";
import {ADMIN_ROUTE} from "../../feature/admin/admin.router";

export const HOME_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'parent-menu', component: ParentMenuComponent },
      ...ADMIN_ROUTE,
      ...USER_ROUTE,
      ...MANTENIMIENTO_ROUTE
    ]
  }
];