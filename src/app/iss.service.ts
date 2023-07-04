import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iss } from './models/iss.model';

@Injectable({
  providedIn: 'root',
})
export class IssService {
  private apiISSUrl = 'http://localhost:3000/api/iss/location';

  constructor(private http: HttpClient) {}

  getIssLocation() {
    return this.http.get<Iss[]>(this.apiISSUrl);
  }
}
