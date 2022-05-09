import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'environments/environment';

@Injectable({
  providedIn: "root",
})
export class RoutingService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl + "/routing";;

  // ------------------- HTTP Request -------------------

  getVrptw(ids: Number[]): Observable<any> {
    const url = `${this.apiUrl}/VRPTW`;
    let params = new HttpParams().set("ids", ids.toString());
    return this.http.get<any>(url, { params: params });
  }

  getVrptwAll(): Observable<any> {
    const url = `${this.apiUrl}/VRPTW/all`;
    return this.http.get<any>(url);
  }
}
