import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, filter } from "rxjs/operators";
import { Establishment } from "models/establishment.model";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class EstablishmentService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl + "/establishments";

  getAllEstablishments(): Observable<Establishment[]> {
    const url = `${this.apiUrl}/all`;
    return this.http.get<Establishment[]>(url);
  }

  postCreateOneEstablishment(
    establishment: Establishment
  ): Observable<Establishment> {
    const url = `${this.apiUrl}`;
    return this.http.post<Establishment>(url, establishment);
  }

  getOneEstablishment(id: number): Observable<Establishment> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Establishment>(url);
  }

  putUpdateOneEstablishment(
    establishment: Establishment
  ): Observable<Establishment> {
    const url = `${this.apiUrl}/${establishment.id}`;
    return this.http.put<Establishment>(url, establishment);
  }

  deleteOneEstablishment(establishment: number): Observable<Establishment> {
    const url = `${this.apiUrl}/${establishment}`;
    return this.http.delete<Establishment>(url);
  }
}
