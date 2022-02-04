import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Guest } from '../models/guests.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  apiURL: string = environment.backend.apiURL;

  async lookupGuests(query: string): Promise<Guest[]> {
    const params = new HttpParams().set('q', query);
    return await this.http
      .get<any>(`${this.apiURL}/guests/search`, { params })
      .toPromise();
  }

  async lookupTables(query: string): Promise<Guest[]> {
    const params = new HttpParams().set('q', query);
    return await this.http
      .get<any>(`${this.apiURL}/guests/table`, { params })
      .toPromise();
  }
}
