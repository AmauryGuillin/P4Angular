import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from './models/animal.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  private allAnimalsTestUrl = 'http://localhost:3000/api/animal/PantheraLeo';

  constructor(private http: HttpClient) {}

  getAnimalsTest() {
    return this.http.get<Animal[]>(this.allAnimalsTestUrl);
  }
}
