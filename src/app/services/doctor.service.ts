import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Doctor } from 'models/doctor.model';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  private _localhostUrl = 'http://localhost:8080/doctors';

  // ------------------- HTTP Request -------------------

  getAllDoctors(): Observable<Doctor[]> {
    const url = `${this._localhostUrl}/all`;
    return this.http.get<Doctor[]>(url);
  }

  postCreateOneDoctor(doctor: Doctor): Observable<Doctor> {
    const url = `${this._localhostUrl}`;
    return this.http.post<Doctor>(url, doctor);
  }

  getOneDoctor(id: number): Observable<Doctor> {
    const url = `${this._localhostUrl}/${id}`;
    return this.http.get<Doctor>(url);
  }

  putUpdateOneDoctor(doctor: Doctor): Observable<Doctor> {
    const url = `${this._localhostUrl}/${doctor.id}`;
    this.http.get<Doctor>(url);
    return this.http.put<Doctor>(url, doctor);
  }

  deleteOneDoctor(doctor: number): Observable<Doctor> {
    const url = `${this._localhostUrl}/${doctor}`;
    return this.http.delete<Doctor>(url);
  }

  getDoctorsByEstablishment(id: number) {
    const url = `${this._localhostUrl}`;
    let params = new HttpParams().set('establishment', "" + id);
    return this.http.get<Doctor[]>(url, { params: params });
  }
}
