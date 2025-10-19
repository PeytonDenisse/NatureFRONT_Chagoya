// src/app/pages/home/home.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import mapboxgl, {
  Map,
  Marker,
  LngLatBounds,
  NavigationControl,
  FullscreenControl,
  Popup
} from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { PlaceService } from '../../core/services/place.service';
import { PlaceListDto } from '../../core/models/place-list.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit, OnDestroy {
  private map!: Map;
  private subs = new Subscription();
  private markers: Marker[] = [];
  style = 'mapbox://styles/mapbox/streets-v11';

  constructor(
    private placeService: PlaceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    try {
      (mapboxgl as any).accessToken = environment.MAPBOX_TOKEN;

      // Crea el mapa cuando el <div id="map"> YA existe
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        center: [-102.5528, 23.6345], // Centro de México
        zoom: 4
      });

      // Controles
      this.map.addControl(new NavigationControl(), 'top-right');
      this.map.addControl(new FullscreenControl(), 'top-right');

      // Log de errores del mapa
      this.map.on('error', (e) => console.error('[Mapbox error]', e?.error || e));

      // Carga de lugares y marcadores
      const s = this.placeService.getPlaces().subscribe({
        next: (places: PlaceListDto[]) => this.renderMarkers(places),
        error: (err) => console.error('[PlaceService error]', err),
      });
      this.subs.add(s);

    } catch (err) {
      console.error('[HomeComponent init error]', err);
    }
  }

  private renderMarkers(places: PlaceListDto[]): void {
    if (!places?.length) return;

    const bounds = new LngLatBounds();

    places.forEach((p) => {
      const popupHtml = `
        <div style="min-width:180px">
          <strong>${p.name}</strong><br/>
          <small>${p.category}</small><br/>
          <a href="#" class="to-detail" data-id="${p.id}">Ver detalle</a>
        </div>
      `;

      const popup = new Popup({ offset: 24 }).setHTML(popupHtml);

      const marker = new Marker()
        .setLngLat([p.longitude, p.latitude])
        .setPopup(popup)
        .addTo(this.map);

      this.markers.push(marker);
      bounds.extend([p.longitude, p.latitude]);

      // Al abrir el popup, enlazar el click del link a Angular Router
     
    popup.on('open', () => {
      const popupElement = popup.getElement(); // puede ser null
      if (!popupElement) return; // si no existe, salimos

      const link = popupElement.querySelector('.to-detail') as HTMLAnchorElement | null;
      if (link) {
        link.onclick = (e) => {
          e.preventDefault();
          this.router.navigate(['/admin/places', p.id]); // ✅ navega sin recargar
        };
      }
    });

    });

    this.map.fitBounds(bounds, { padding: 60, maxZoom: 12 });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.markers.forEach(m => m.remove());
    if (this.map) this.map.remove();
  }
}
