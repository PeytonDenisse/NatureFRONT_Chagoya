import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import mapboxgl, { Map, Marker } from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { PlaceService } from '../../core/services/place.service';
import { PlaceDetailDto } from '../../core/models/place-detail.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.html',
  styleUrls: ['./place-detail.scss'],
  standalone: false,
})
export class PlaceDetail implements OnInit, OnDestroy {
  id?: number;
  place?: PlaceDetailDto;

  private miniMap?: Map;
  private miniMarker?: Marker;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : undefined;

    if (!this.id) {
      console.warn('No se encontró el parámetro ID en la ruta.');
      return;
    }

    this.placeService.getPlace(this.id).subscribe({
      next: (res) => {
        this.place = res;
        this.initMiniMap(); 
      },
      error: (err) => console.error('Error al obtener detalle:', err),
    });
  }

  private initMiniMap(): void {
    if (!this.place) return;

    requestAnimationFrame(() => {
      const container = document.getElementById('mini-map');
      if (!container) {
        console.warn("Container 'mini-map' no encontrado.");
        return;
      }

      (mapboxgl as any).accessToken = environment.MAPBOX_TOKEN;

      this.miniMarker?.remove();
      this.miniMap?.remove();

      this.miniMap = new mapboxgl.Map({
        container,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.place!.longitude, this.place!.latitude],
        zoom: 12,
        interactive: false,
      });

      this.miniMarker = new mapboxgl.Marker()
        .setLngLat([this.place!.longitude, this.place!.latitude])
        .addTo(this.miniMap);
    });
  }

  ngOnDestroy(): void {
    this.miniMarker?.remove();
    this.miniMap?.remove();
  }
}
