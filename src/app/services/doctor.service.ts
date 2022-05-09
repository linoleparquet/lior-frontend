import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Doctor } from "models/doctor.model";
import { HttpParams } from "@angular/common/http";
import { environment } from 'environments/environment';


@Injectable({
  providedIn: "root",
})
export class DoctorService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl + "/doctors";

  // ------------------- HTTP Request -------------------

  getAllDoctors(): Observable<Doctor[]> {
    const url = `${this.apiUrl}/all`;
    return this.http.get<Doctor[]>(url);
  }

  postCreateOneDoctor(doctor: Doctor): Observable<Doctor> {
    const url = `${this.apiUrl}`;
    return this.http.post<Doctor>(url, doctor);
  }

  getOneDoctor(id: number): Observable<Doctor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Doctor>(url);
  }

  putUpdateOneDoctor(doctor: Doctor): Observable<Doctor> {
    const url = `${this.apiUrl}/${doctor.id}`;
    this.http.get<Doctor>(url);
    return this.http.put<Doctor>(url, doctor);
  }

  deleteOneDoctor(doctor: number): Observable<Doctor> {
    const url = `${this.apiUrl}/${doctor}`;
    return this.http.delete<Doctor>(url);
  }

  getDoctorsByEstablishment(id: number) {
    const url = `${this.apiUrl}`;
    let params = new HttpParams().set("establishment", "" + id);
    return this.http.get<Doctor[]>(url, { params: params });
  }


}
