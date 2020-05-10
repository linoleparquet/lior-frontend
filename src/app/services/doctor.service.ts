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

  private localhostUrl = 'http://localhost:8080/doctors';

  // ------------------- HTTP Request -------------------

  getAllDoctors(): Observable<Doctor[]> {
    const url = `${this.localhostUrl}`;
    return this.http.get<Doctor[]>(url);

    return of(DOCTORS);
  }

  postCreateNewDoctor(doctor: Doctor): Observable<Doctor> {
    const url = `${this.localhostUrl}`;
    return this.http.post<Doctor>(url, doctor);
  }

  getOneDoctor(id: number): Observable<Doctor> {
    const url = `${this.localhostUrl}/${id}`;
    return this.http.get<Doctor>(url);
    return of(DOCTORS[id - 1]);
  }

  putUpdateOneDoctor(doctor: Doctor): Observable<Doctor> {
    const url = `${this.localhostUrl}/${doctor.id}`;
    this.http.get<Doctor>(url);
    return this.http.put<Doctor>(url, doctor);
  }

  deleteOneDoctor(doctor: number): Observable<Doctor> {
    const url = `${this.localhostUrl}/${doctor}`;
    return this.http.delete<Doctor>(url);
  }

  // -----------------------------------------------------

  getDoctorsActualMonth(): Observable<Doctor[]> {
    const now = new Date(Date.now());
    return this.getAllDoctors()
      .pipe(
        map(doctors =>
          doctors.filter(doctor => {
            const visit = new Date(doctor.nextVisitDate);
            if (doctor.nextVisitDate != "0" &&
              now.getMonth() == visit.getMonth() &&
              now.getFullYear() == visit.getFullYear()) { return true }
          })));
  }


  getDoctorsBeforeActualMonth(): Observable<Doctor[]> {
    const now = new Date(Date.now());
    return this.getAllDoctors()
      .pipe(
        map(doctors =>
          doctors.filter(doctor => {
            const nextVisit = new Date(doctor.nextVisitDate);
            if (doctor.nextVisitDate != "0" &&
              (((nextVisit.getMonth() < now.getMonth() && now.getFullYear() == nextVisit.getFullYear()))
                || nextVisit.getFullYear() < now.getFullYear())) { return true }
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
