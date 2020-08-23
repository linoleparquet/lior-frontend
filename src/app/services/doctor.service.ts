import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Doctor } from 'models/doctor.model';
import { DOCTORS } from 'app/mock/database.mock';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  private _localhostUrl = 'http://localhost:8080/doctors';

  // ------------------- HTTP Request -------------------

  getAllDoctors(): Observable<Doctor[]> {
    const url = `${this._localhostUrl}`;
    return this.http.get<Doctor[]>(url);
  }

  postCreateNewDoctor(doctor: Doctor): Observable<Doctor> {
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

  // -----------------------------------------------------

  getDoctorsVisitPlannedForActualMonth(): Observable<Doctor[]> {
    const now = new Date(Date.now());
    now.setHours(0, 0, 0, 0);
    now.setDate(1)
    return this.getAllDoctors()
      .pipe(
        map(doctors =>
          doctors.filter(doctor => {
            const visit = new Date(doctor.nextVisitDate);
            visit.setHours(0, 0, 0, 0)
            visit.setDate(1)
            if (doctor.nextVisitDate != "0" && now.getTime() == visit.getTime()) { return true }
          })));
  }


  getDoctorsVisitPlannedBeforeActualMonth(): Observable<Doctor[]> {
    const now = new Date(Date.now());
    now.setHours(0, 0, 0, 0);
    now.setDate(1)
    return this.getAllDoctors()
      .pipe(
        map(doctors =>
          doctors.filter(doctor => {
            const visit = new Date(doctor.nextVisitDate);
            visit.setHours(0, 0, 0, 0)
            visit.setDate(1)
            if (doctor.nextVisitDate != "0" && visit.getTime() < now.getTime()) { return true }
          })));
  }

  getDoctorsProspect(): Observable<Doctor[]> {
    return this.getAllDoctors().pipe(
      map(doctors =>
        doctors.filter(doctor => {
          if (doctor.nextVisitDate == "0") { return true }
        })));
  }
}
