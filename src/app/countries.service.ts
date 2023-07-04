import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from './models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private allCountriesTest = 'http://localhost:3000/api/country/all';

  constructor(private http: HttpClient) {}

  getCountriesTest() {
    return this.http.get<Country[]>(this.allCountriesTest);
  }
}
