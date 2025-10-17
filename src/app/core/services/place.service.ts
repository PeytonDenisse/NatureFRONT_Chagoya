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
      map((res) => {
        const rawAmenities =
          res?.amenities ??
          res?.Amenities ??
          res?.amenitiesList ??
          res?.AmenitiesList ??
          [];

        const amenities: AmenityDto[] = Array.isArray(rawAmenities)
          ? rawAmenities.map((a: any, i: number) =>
              typeof a === 'string'
                ? { id: i + 1, name: a }
                : { id: a?.id ?? i + 1, name: a?.name ?? String(a ?? ''), icon: a?.icon }
            )
          : [];

        return {
          ...res,
          amenities,
          photos: Array.isArray(res?.photos) ? res.photos : [],
          trails: Array.isArray(res?.trails) ? res.trails : [],
        } as PlaceDetailDto;
      })
    );
  }

  getAllTrails(): Observable<TrailDto[]> {
    return this.http.get<TrailDto[]>(`${this.base}/Trails`);
  }
}
