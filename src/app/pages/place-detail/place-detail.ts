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

    (mapboxgl as any).accessToken = environment.MAPBOX_TOKEN;

    this.placeService.getPlace(this.id).subscribe({
      next: (res) => {
        this.place = res;
        this.initMiniMap();
      },
      error: (err) => console.error('Error al obtener detalle:', err),
    });
  }

  /**
   * Inicializa el mini-mapa cuando:
   * - ya tenemos this.place
   * - y existe el contenedor con id="mini-map"
   * Incluye reintento corto por si el *ngIf todavía no pintó el contenedor.
   */
  private initMiniMap(): void {
    if (!this.place) return;

    const tryInit = () => {
      const container = document.getElementById('mini-map');
      if (!container) {
        // Primer intento fallido: esperamos al siguiente frame
        requestAnimationFrame(() => {
          const lateContainer = document.getElementById('mini-map');
          if (!lateContainer) {
            // Segundo intento breve
            setTimeout(() => {
              const lastContainer = document.getElementById('mini-map');
              if (!lastContainer) {
                console.warn("Container 'mini-map' no encontrado. Verifica el template.");
                return;
              }
              this.createMap(lastContainer as HTMLDivElement);
            }, 50);
          } else {
            this.createMap(lateContainer as HTMLDivElement);
          }
        });
        return;
      }

      this.createMap(container as HTMLDivElement);
    };

    // Lanzamos en el próximo frame para dar tiempo a que se renderice el *ngIf
    requestAnimationFrame(tryInit);
  }

  /**
   * Crea el mapa y marcador, asegurando limpieza previa.
   */
  private createMap(containerEl: HTMLDivElement): void {
    if (!this.place) return;

    this.miniMarker?.remove();
    this.miniMap?.remove();

    this.miniMap = new mapboxgl.Map({
      container: containerEl,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.place.longitude, this.place.latitude],
      zoom: 12,
      interactive: false,
    });

    this.miniMap.once('load', () => {
      this.miniMarker = new mapboxgl.Marker()
        .setLngLat([this.place!.longitude, this.place!.latitude])
        .addTo(this.miniMap!);
      // Ajuste por si el contenedor cambió de tamaño al abrir galería/senderos
      this.miniMap!.resize();
    });
  }

  ngOnDestroy(): void {
    this.miniMarker?.remove();
    this.miniMap?.remove();
  }
}
