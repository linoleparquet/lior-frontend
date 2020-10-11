import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  url: string = 'https://api-adresse.data.gouv.fr/search/?q='

  getAdressResults(query: String): Observable<any>{
     return this.http.get<any>(this.url+query);
  }
}
