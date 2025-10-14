import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as mapboxgl from 'mapbox-gl';
import { environment } from'../../../environments/environment';
import { PlaceService } from '../../core/services/place.services';
import { Place } from '../../core/models/place.model';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private svc = inject(PlaceService);
  private map?: mapboxgl.Map;
  places: Place[] = [];

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.MAPBOX_TOKEN;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-102.5528, 23.6345],
      zoom: 4.5
    });

    this.svc.getAll().subscribe({
      next: d => { this.places = d; this.addMarkers(); }
    });
  }

  private addMarkers() {
    if (!this.map) return;
    this.places.forEach(p => {
      new mapboxgl.Marker()
        .setLngLat([p.longitude, p.latitude])
        .setPopup(new mapboxgl.Popup().setHTML(`<strong>${p.name}</strong><br>${p.category}`))
        .addTo(this.map!);
    });
  }
  ngOnDestroy(): void { this.map?.remove(); }
}
