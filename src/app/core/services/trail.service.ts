// src/app/core/services/trail.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { TrailDto } from '../models/trail.model';

@Injectable({ providedIn: 'root' })
export class TrailService {
  private http = inject(HttpClient);
  private base = environment.API_URL; 

  /** GET /trails */
  getTrails(): Observable<TrailDto[]> {
    return this.http.get<TrailDto[]>(`${this.base}/Trails`);
  }

  /** GET /trails/:id */
  getTrail(id: number): Observable<TrailDto> {
    return this.http.get<TrailDto>(`${this.base}/Trails/${id}`);
  }

  /** GET /places/:placeId/trails  (si tu API expone este endpoint) */
  getTrailsByPlace(placeId: number): Observable<TrailDto[]> {
    return this.http.get<TrailDto[]>(`${this.base}/places/${placeId}/Trails`);
  }
}
