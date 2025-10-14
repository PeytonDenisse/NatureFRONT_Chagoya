import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaceService } from '../../../core/services/place.services';
import { Place } from '../../../core/models/place.model';

@Component({
  selector: 'app-places-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './places-list.html'
})
export class PlacesListComponent implements OnInit {
  private svc = inject(PlaceService);
  places: Place[] = [];
  loading = false;
  error = '';

  ngOnInit(): void {
    this.loading = true;
    this.svc.getAll().subscribe({
      next: d => { this.places = d; this.loading = false; },
      error: e => { this.error = 'No se pudo cargar'; this.loading = false; console.error(e); }
    });
  }
}
