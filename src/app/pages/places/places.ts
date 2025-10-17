import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../core/services/place.service';
import { PlaceListDto } from '../../core/models/place-list.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.html',
  styleUrls: ['./places.scss'],
  standalone: false,
})

export class Place implements OnInit {
  places: PlaceListDto[] = [];

  constructor(private placeService: PlaceService) {}

  ngOnInit(): void {
    console.log('Iniciando componente Places');
    this.placeService.getPlaces().subscribe({
      next: (res) => {
        this.places = res;
        console.log('Lugares cargados:', this.places);
      },
      error: (err) => {
        console.error('Error al cargar lugares:', err);
      },
      complete: () => console.log('Terminando componente Places'),
    });
  }

  showDetail(place: PlaceListDto): void {
    console.log('Detalle del lugar:', place);
  }
}
