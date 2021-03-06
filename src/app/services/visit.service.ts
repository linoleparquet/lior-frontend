import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators'
import { Visit } from 'models/visit.model';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private http: HttpClient) { }

  private localhostUrl = 'http://localhost:8080/visits';

  getAllVisits(): Observable<Visit[]> {
    const url = `${this.localhostUrl}/all`;
    return this.http.get<Visit[]>(url);
  }

  postCreateNewVisit(visit: Visit): Observable<Visit> {
    const url = `${this.localhostUrl}`;
    return this.http.post<Visit>(url, visit);
  }

  getOneVisit(id: number): Observable<Visit> {
    const url = `${this.localhostUrl}/${id}`;
    return this.http.get<Visit>(url);
  }

  putUpdateOneVisit(visit: Visit): Observable<Visit> {
    const url = `${this.localhostUrl}/${visit.id}`;
    return this.http.put<Visit>(url, visit);
  }

  deleteOneVisit(visit: number): Observable<Visit> {
    const url = `${this.localhostUrl}/${visit}`;
    return this.http.delete<Visit>(url);
  }

  getVisitsByDoctor(id: number) {
    const url = `${this.localhostUrl}`;
    let params = new HttpParams().set('doctor', "" + id);
    return this.http.get<Visit[]>(url, { params: params });
  }
}