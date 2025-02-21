import {Injectable} from "@angular/core";
import {enviroment} from "../../../enviroment/service.enviroment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Auth} from "../../interfaces/services/auth.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = `${enviroment.getwayUri}/service/servicio`;

  constructor(private http: HttpClient) {}

  getServiceBYPrefijo(prefijo: String): Observable<any> {
    return this.http.get(`${this.apiUrl}/${prefijo}`);
  }
}
