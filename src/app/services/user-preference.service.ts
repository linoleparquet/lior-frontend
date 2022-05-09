import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userPreference } from 'models/user-preference.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserPreferenceService {
  
  constructor(private http: HttpClient) {}
  
  private apiUrl = environment.apiUrl + "/userPreference";

  getDefaultUserPreference(): Observable<any> {
    const url = `${this.apiUrl}/default`;
    return this.http.get<any>(url);
  }

  putUpdateOneUserPreference(userPreference: userPreference){
    const url = `${this.apiUrl}/${userPreference.id}`;
    return this.http.put<userPreference>(url, userPreference);
  }
}
