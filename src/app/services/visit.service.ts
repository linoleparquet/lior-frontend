import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Visit } from "models/visit.model";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class VisitService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl + "/visits";

  getAllVisits(): Observable<Visit[]> {
    const url = `${this.apiUrl}/all`;
    return this.http.get<Visit[]>(url);
  }

  postCreateNewVisit(visit: Visit): Observable<Visit> {
    const url = `${this.apiUrl}`;
    return this.http.post<Visit>(url, visit);
  }

  getOneVisit(id: number): Observable<Visit> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Visit>(url);
  }

  putUpdateOneVisit(visit: Visit): Observable<Visit> {
    const url = `${this.apiUrl}/${visit.id}`;
    return this.http.put<Visit>(url, visit);
  }

  deleteOneVisit(visit: number): Observable<Visit> {
    const url = `${this.apiUrl}/${visit}`;
    return this.http.delete<Visit>(url);
  }

  getVisitsByDoctor(id: number) {
    const url = `${this.apiUrl}`;
    let params = new HttpParams().set("doctor", "" + id);
    return this.http.get<Visit[]>(url, { params: params });
  }
}
