import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from 'models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  private localhostUrl = 'http://localhost:8080/doctors';

  getAllDoctors(): Observable<Doctor[]> {
    const url = `${this.localhostUrl}`;
    return this.http.get<Doctor[]>(url);
  }

  postCreateNewDoctor(doctor: Doctor): Observable<Doctor> {
    const url = `${this.localhostUrl}`;
    return this.http.post<Doctor>(url, doctor);
  }

  getOneDoctor(id: number): Observable<Doctor> {
    const url = `${this.localhostUrl}/${id}`;
    return this.http.get<Doctor>(url);
  }

  putUpdateOneDoctor(doctor: Doctor): Observable<Doctor> {
    const url = `${this.localhostUrl}/${doctor.id}`;
    return this.http.put<Doctor>(url, doctor);
  }

  deleteOneDoctor(doctor: number): Observable<Doctor> {
    const url = `${this.localhostUrl}/${doctor}`;
    return this.http.delete<Doctor>(url);
  }
}
