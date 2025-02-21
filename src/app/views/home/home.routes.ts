import {Routes} from "@angular/router";
import {HomeComponent} from "./views/main/home.component";
import {ParentMenuComponent} from "./views/main/components/parent-menu/parent-menu.component";
import {USER_ROUTE} from "./views/user/user.route";
import {ACCIONES_COMUNALES_ROUTE} from "../../feature/acciones-comunales/acciones-comunales.router";
import {TUTELA_ROUTE} from "../../feature/tutela/tutela.router";

export const HOME_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'parent-menu', component: ParentMenuComponent },
      ...USER_ROUTE,
      ...TUTELA_ROUTE,
      ...ACCIONES_COMUNALES_ROUTE
    ]
  }
];