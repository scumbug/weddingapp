import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Guest } from '../models/guests.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  async lookupGuests(query: string): Promise<Guest[]> {
    const params = new HttpParams().set('q', query);
    return await this.http
      .get<any>('/api/guests/search', { params })
      .toPromise();
  }

  async lookupTables(query: string): Promise<Guest[]> {
    const params = new HttpParams().set('q', query);
    return await this.http
      .get<any>('/api/guests/table', { params })
      .toPromise();
  }
}
