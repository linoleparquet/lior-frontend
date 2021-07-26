import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userPreference } from 'models/user-preference.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPreferenceService {

  constructor(private http: HttpClient) {}

  private _localhostUrl = "http://localhost:8080/userPreference";

  getDefaultUserPreference(): Observable<any> {
    const url = `${this._localhostUrl}/default`;
    return this.http.get<any>(url);
  }

  putUpdateOneUserPreference(userPreference: userPreference){
    const url = `${this._localhostUrl}/${userPreference.id}`;
    return this.http.put<userPreference>(url, userPreference);
  }
}
