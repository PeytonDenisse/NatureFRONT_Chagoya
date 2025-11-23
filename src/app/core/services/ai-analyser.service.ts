import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

import { PlaceAnalysis } from '../models/place-ia-analysis.model';
import { TrailAnalysis } from '../models/trail-ia-analysis.model';

@Injectable({
  providedIn: 'root'
})
export class AiAnalyzerService {

  private http = inject(HttpClient);
  private base = environment.API_URL;

  analyzePlaces(): Observable<PlaceAnalysis> {
    return this.http.get<PlaceAnalysis>(`${this.base}/Places/ia-analyzer`);
  }

  analyzeTrails(): Observable<TrailAnalysis> {
    return this.http.get<TrailAnalysis>(`${this.base}/Trails/ia-analyzer`);
  }
}

