import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Barbie } from '../../models/barbie.model';

@Injectable({
  providedIn: 'root'
})
export class BarbieService {

  private baseUrl = 'http://localhost:8080/api/barbies';

  constructor(private http: HttpClient) { }

  getBarbies(): Observable<Barbie[]> {
    return this.http.get<Barbie[]>(this.baseUrl);
  }
}
