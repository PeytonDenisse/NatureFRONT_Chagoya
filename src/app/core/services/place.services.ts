import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../models/place.model';

@Injectable({ providedIn: 'root' })
export class PlaceService {
  private apiUrl = 'https://localhost:7023/api/place'; // Ajusta el puerto

  constructor(private http: HttpClient) {}

  getAll(): Observable<Place[]> {
    return this.http.get<Place[]>(`${this.apiUrl}/getAll`);
  }

  getById(id: number): Observable<Place> {
    return this.http.get<Place>(`${this.apiUrl}/${id}`);
  }

  create(place: Place): Observable<Place> {
    return this.http.post<Place>(`${this.apiUrl}`, place);
  }

  update(id: number, place: Place): Observable<Place> {
    return this.http.put<Place>(`${this.apiUrl}/${id}`, place);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
