import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Doctor } from 'models/doctor.model';
import { DOCTORS } from 'app/mock/database.mock';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  private localhostUrl = 'http://localhost:8080/doctors';

  // ------------------- HTTP Request -------------------

  getAllDoctors(): Observable<Doctor[]> {
    // const url = `${this.localhostUrl}`;
    // return this.http.get<Doctor[]>(url);

    return of(DOCTORS);
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

  // ------------------ 

  getDoctorsActualMonth(): Doctor[] {
    const now = new Date(Date.now());
    let doc: Doctor[];
    this.getAllDoctors().subscribe(doctors =>
      doc = doctors.filter(doctor => {
        const nextVisit = new Date(doctor.nextVisitDate);
        if (doctor.nextVisitDate != "0" &&
          now.getMonth() == nextVisit.getMonth() &&
          now.getFullYear() == nextVisit.getFullYear()) { return true }
      }));

    return doc;
  }


  getDoctorsBeforeActualMonth(): Doctor[] {
    const now = new Date(Date.now());

    let doc: Doctor[];
    this.getAllDoctors().subscribe(doctors =>
      doc = doctors.filter(doctor => {
        const nextVisit = new Date(doctor.nextVisitDate);

        if (doctor.nextVisitDate != "0"
          &&
          (((nextVisit.getMonth() < now.getMonth() && now.getFullYear() == nextVisit.getFullYear()))
            || nextVisit.getFullYear() < now.getFullYear())) { return true }
      }));

    return doc;
  }

  getDoctorsProspect(): Doctor[] {
    let doc: Doctor[];
    this.getAllDoctors().subscribe(doctors =>
      doc = doctors.filter(doctor => {
        if (doctor.nextVisitDate == "0") { return true }
      }));

    return doc;
  }
}
