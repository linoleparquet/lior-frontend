import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators'
import { Establishment } from 'models/establishment.model';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  constructor(private http: HttpClient) { }

  private localhostUrl = 'http://localhost:8080/establishments';

  getAllEstablishments(): Observable<Establishment[]> {
    const url = `${this.localhostUrl}/all`;
    return this.http.get<Establishment[]>(url);
  }

  postCreateOneEstablishment(establishment: Establishment): Observable<Establishment> {
    const url = `${this.localhostUrl}`;
    return this.http.post<Establishment>(url, establishment);
  }

  getOneEstablishment(id: number): Observable<Establishment> {
    const url = `${this.localhostUrl}/${id}`;
    return this.http.get<Establishment>(url);
  }

  putUpdateOneEstablishment(establishment: Establishment): Observable<Establishment> {
    const url = `${this.localhostUrl}/${establishment.id}`;
    return this.http.put<Establishment>(url, establishment);
  }

  deleteOneEstablishment(establishment: number): Observable<Establishment> {
    const url = `${this.localhostUrl}/${establishment}`;
    return this.http.delete<Establishment>(url);
  }

}