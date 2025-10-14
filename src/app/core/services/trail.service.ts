import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Trail } from '../models/trail.model';

@Injectable({ providedIn: 'root' })
export class TrailService {
  private http = inject(HttpClient);
  private url = `${environment.API_URL}/trails`;
  getAll(): Observable<Trail[]> { return this.http.get<Trail[]>(this.url); }
}
