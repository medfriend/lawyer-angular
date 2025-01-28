import {Routes} from "@angular/router";
import {PermissionsGuard} from "../../core/guard/permission.guard";
import {ConsultarComponent} from "./consultar/consultar.component";

export const ADMIN_ROUTE: Routes = [
    {
        path: 'admin',
        children: [
            { path: 'consultar', component: ConsultarComponent, canActivate: [PermissionsGuard] },
        ]
    }
]
