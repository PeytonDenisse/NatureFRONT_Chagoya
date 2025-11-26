import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, map } from 'rxjs';

import {
  PlaceAnalysis,
  PlaceAnalysisApiResponse
} from '../models/place-ia-analysis.model';
import { TrailAnalysis } from '../models/trail-ia-analysis.model';

@Injectable({
  providedIn: 'root'
})
export class AiAnalyzerService {

  private http = inject(HttpClient);
  private base = environment.API_URL; // ej: http://18.188.37.201:8080/api

  analyzePlaces(): Observable<PlaceAnalysis> {
    return this.http
      .get<PlaceAnalysisApiResponse>(`${this.base}/places/ai-analyzi`)
      .pipe(
        map(res => res.ai)   // 👈 solo regresamos el objeto "ai"
      );
  }

  analyzeTrails(): Observable<TrailAnalysis> {
    return this.http.get<TrailAnalysis>(`${this.base}/trails/ai-analyze`);
  }
}
