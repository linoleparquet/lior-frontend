import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Doctor } from "models/doctor.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RoutingService {
  constructor(private http: HttpClient) {}

  private _localhostUrl = "http://localhost:8080/routing";

  // ------------------- HTTP Request -------------------

  getVrptw(ids: Number[]): Observable<any> {
    const url = `${this._localhostUrl}/VRPTW`;
    let params = new HttpParams().set("ids", ids.toString());
    return this.http.get<any>(url, { params: params });
  }
}
