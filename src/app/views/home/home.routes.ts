import {Routes} from "@angular/router";
import {HomeComponent} from "./views/main/home.component";
import {ParentMenuComponent} from "./views/main/components/parent-menu/parent-menu.component";
import {USER_ROUTE} from "./views/user/user.route";
import {ADMIN_ROUTE} from "../../feature/admin/admin.router";
import {ACCIONES_COMUNALES_ROUTE} from "../../feature/acciones-comunales/acciones-comunales.router";

export const HOME_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'parent-menu', component: ParentMenuComponent },
      ...ADMIN_ROUTE,
      ...USER_ROUTE,
      ...ACCIONES_COMUNALES_ROUTE
    ]
  }
];