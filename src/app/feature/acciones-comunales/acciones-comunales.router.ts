import {Routes} from "@angular/router";
import {PermissionsGuard} from "../../core/guard/permission.guard";
import AsistenteVirtualComponent from "./asistente-virtual/asistente-virtual.component";
import {CookieGuard} from "../../core/guard/cookie.guard";

export const ACCIONES_COMUNALES_ROUTE: Routes = [
    {
        path: 'acciones-comunales',
        children: [
            { path: 'asistente-virtual', component: AsistenteVirtualComponent, canActivate: [PermissionsGuard, CookieGuard] },
        ]
    },
]