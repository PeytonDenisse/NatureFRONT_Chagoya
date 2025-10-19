import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, map } from 'rxjs';

import { PlaceListDto } from '../models/place-list.model';
import { PlaceDetailDto } from '../models/place-detail.model';
import { TrailDto } from '../models/trail.model';
import { AmenityDto } from '../models/amenity.models';

@Injectable({ providedIn: 'root' })
export class PlaceService {
  private http = inject(HttpClient);
  private base = environment.API_URL; 
 
  getPlaces(): Observable<PlaceListDto[]> {
    return this.http.get<PlaceListDto[]>(`${this.base}/Places`);
  }

 
  getPlace(id: number): Observable<PlaceDetailDto> {
    return this.http.get<any>(`${this.base}/Places/${id}`).pipe(
      map((res: any): PlaceDetailDto => {
        console.log('[PlaceService.getPlace] raw response:', res);

        // ---- Amenities ----
        const rawAmenities = res?.amenities ?? res?.Amenities ?? [];
        const amenities: AmenityDto[] = Array.isArray(rawAmenities)
          ? rawAmenities.map((a: any, i: number) =>
              typeof a === 'string'
                ? { id: i + 1, name: a }
                : { id: a?.id ?? i + 1, name: a?.name ?? String(a ?? ''), icon: a?.icon }
            )
          : [];

        // ---- Photos  ----
        
        const rawPhotos = res?.Photos ?? res?.photos ?? [];
        const photos = Array.isArray(rawPhotos)
          ? rawPhotos.map((p: any, i: number) => ({
              id: p?.id ?? i + 1,
              url: p?.url ?? p?.Url ?? '',
              description: p?.description ?? p?.Description ?? null,
            }))
          : [];

        // ---- Trails ----
        const trails: TrailDto[] = Array.isArray(res?.trails)
          ? res.trails
          : (Array.isArray(res?.Trails) ? res.Trails : []);

        const mapped: PlaceDetailDto = {
        
          id: res.id,
          name: res.name,
          category: res.category,
          description: res.description ?? null,
          latitude: res.latitude,
          longitude: res.longitude,
          elevationMeters: res.elevationMeters ?? null,
          accessible: !!res.accessible,
          entryFee: res.entryFee ?? null,
          openingHours: res.openingHours ?? null,

        
          amenities,
          photos,
          trails,
        };

        console.log('[PlaceService.getPlace] first photo url:', mapped.photos?.[0]?.url);
        return mapped;
      })
    );
  }

  
  getAllTrails(): Observable<TrailDto[]> {
    return this.http.get<TrailDto[]>(`${this.base}/Trails`);
  }
}
