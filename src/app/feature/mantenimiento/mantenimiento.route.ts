import {Routes} from "@angular/router";
import {GestionMantenimientoComponent} from "./gestion-mantenimiento/gestion-mantenimiento.component";
import {PermissionsGuard} from "../../core/guard/permission.guard";

export const MANTENIMIENTO_ROUTE: Routes = [
  { path: 'gestion-mantenimiento', component: GestionMantenimientoComponent, canActivate: [PermissionsGuard] },
]
