import {Routes} from "@angular/router";
import TutelaComponent from "./tutela.component";
import {CookieGuard} from "../../core/guard/cookie.guard";
import {PermissionsGuard} from "../../core/guard/permission.guard";
import CrearTutelaComponent from "./pages/crear-tutela/crear-tutela.component";

export const TUTELA_ROUTE: Routes = [
    {
        path: 'tutela',
        children: [
            { path: '', component: TutelaComponent, canActivate: [CookieGuard, PermissionsGuard] },
            { path: 'crear', component: CrearTutelaComponent, canActivate: [CookieGuard, PermissionsGuard] },
        ]
    }
]