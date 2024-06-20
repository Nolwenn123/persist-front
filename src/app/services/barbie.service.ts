import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Barbie } from '../../models/barbie.model';
import { Model } from '../../models/model.model'; // Ajoutez cette ligne

@Injectable({
  providedIn: 'root'
})
export class BarbieService {

  private baseUrl = 'http://barbie-api:1100/api/barbies';
  private modelUrl = 'http://barbie-api:1100/api/models';

  constructor(private http: HttpClient) { }

  getBarbies(): Observable<Barbie[]> {
    return this.http.get<Barbie[]>(this.baseUrl);
  }

  getModels(): Observable<Model[]> { // Ajoutez cette méthode
    return this.http.get<Model[]>(this.modelUrl);
  }

  createBarbie(barbie: Barbie): Observable<Barbie> {
    return this.http.post<Barbie>(this.baseUrl, barbie);
  }
  
  deleteBarbie(barbieId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${barbieId}`);
  }
}
