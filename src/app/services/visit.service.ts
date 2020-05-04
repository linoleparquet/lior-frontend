import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Visit } from 'models/visit.model';
import { VISITS } from 'app/mock/database.mock';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private http: HttpClient) { }

  private localhostUrl = 'http://localhost:8080/visits';

  getAllVisits(): Observable<Visit[]> {
    // const url = `${this.localhostUrl}`;
    // return this.http.get<Visit[]>(url);

    return of(VISITS);
  }

  postCreateNewVisit(visit: Visit): Observable<Visit> {
    const url = `${this.localhostUrl}`;
    return this.http.post<Visit>(url, visit);
  }

  getOneVisit(id: number): Observable<Visit> {
    // const url = `${this.localhostUrl}/${id}`;
    // return this.http.get<Visit>(url);
    return of(VISITS[id - 1])
  }

  putUpdateOneVisit(visit: Visit): Observable<Visit> {
    const url = `${this.localhostUrl}/${visit.id}`;
    return this.http.put<Visit>(url, visit);
  }

  deleteOneVisit(visit: number): Observable<Visit> {
    const url = `${this.localhostUrl}/${visit}`;
    return this.http.delete<Visit>(url);
  }
}
