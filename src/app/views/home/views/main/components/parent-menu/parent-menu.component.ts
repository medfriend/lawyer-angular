import {Component, Inject, OnInit, PLATFORM_ID} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../../../../../util/localstorage/localstorage.service";
import {sharedModules} from "../../../../../../shared/shared.module";
import {BasicAutocompleteComponent} from "../../../../../../components/autocompletes/basic-autocomplete.component";
import {enviroment} from "../../../../../../enviroment/service.enviroment";
import {isPlatformBrowser} from "@angular/common";
import {ServiceService} from "../../../../../../core/service/md-service/service.service";

type menuItem = {
  label: string;
  icon: string;
  route: string;
  submenus: menuItem[]
}

@Component({
  selector: "app-parent-menu",
  styleUrls: ["./parent-menu.component.scss"],
  templateUrl: "./parent-menu.component.html",
  imports: [[...sharedModules], BasicAutocompleteComponent],
  standalone: true,
})
export class ParentMenuComponent implements OnInit {
  menu = '';
  submenus: any[] = []; // Asumiendo que menuItem es de tipo any o tiene una interfaz específica.

  enviromentP = enviroment; // Asegúrate de que 'environment' esté correctamente importado.

  constructor(
      private route: ActivatedRoute,
      private localstorageService: StorageService,
      private serviceService: ServiceService,
      @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.getMenuName();
  }

  getMenuName(){
    this.route.queryParams.subscribe(params => {
      this.menu = params['menu'];
      const userInfo = this.localstorageService.getItem<{menus: any[]} | null>('userInfo'); // Asumiendo que tienes una interfaz para userInfo.

      if (userInfo) {
        const menus = userInfo.menus;
        menus.forEach((item: {label: string, submenus: any[]}) => { // Asumiendo la estructura de menuItem.
          if (item.label === this.menu) {
            this.submenus = item.submenus;
          }
        });
      }
    });
  }

  getService(prefijo: string, path: string) {
    this.serviceService.getServiceBYPrefijo(prefijo).subscribe(service => {
      const { puerto } = service[0]
      window.location.href = 'http://localhost:' + puerto + path;
    })
  }

  routeHandler(routeName: string){
    if (isPlatformBrowser(this.platformId)) {
      const service = routeName.split("/")[1];
      const firstSlash = routeName.indexOf("/"); // Encuentra el primer /
      const secondSlash = routeName.indexOf("/", firstSlash + 1); // Encuentra el segundo /
      const path = secondSlash !== -1 ? routeName.substring(secondSlash) : "";
      // @ts-ignore
      this.getService(service, path)
    }
  }
}