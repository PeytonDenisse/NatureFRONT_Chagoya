import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../core/services/place.service';
import { PlaceListDto } from '../../core/models/place-list.model';
import { AiAnalyzerService } from '../../core/services/ai-analyser.service';
import { PlaceAnalysis } from '../../core/models/place-ia-analysis.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.html',
  styleUrls: ['./places.scss'],
  standalone: false,
})
export class Place implements OnInit {

  places: PlaceListDto[] = [];

  // === IA ANALYTICS ===
  iaModalVisible = false;
  iaLoading = false;
  placeAnalysis?: PlaceAnalysis;

  constructor(
    private placeService: PlaceService,
    private aiService: AiAnalyzerService
  ) {}

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

  analyzePlacesWithIA(): void {
    this.iaModalVisible = true;
    this.iaLoading = true;
    this.placeAnalysis = undefined;

    this.aiService.analyzePlaces().subscribe({
      next: (res) => {
        console.log('[IA Places] análisis recibido:', res);
        this.placeAnalysis = res;   // 👈 ya es el objeto "ai" plano
        this.iaLoading = false;
      },
      error: (err) => {
        console.error('[IA Places] error:', err);
        this.iaLoading = false;
      }
    });
  }

  closeIaModal(): void {
    this.iaModalVisible = false;
  }
}
