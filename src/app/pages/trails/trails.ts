import { Component, OnInit } from '@angular/core';
import { TrailService } from '../../core/services/trail.service';
import { TrailDto } from '../../core/models/trail.model';
import { TrailAnalysis } from '../../core/models/trail-ia-analysis.model';
import { AiAnalyzerService } from '../../core/services/ai-analyser.service';

@Component({
  selector: 'app-trails',
  templateUrl: './trails.html',
  styleUrls: ['./trails.scss'],
  standalone: false,
})
export class Trails implements OnInit {
  trails: TrailDto[] = [];

  // === IA ANALYTICS ===
  iaModalVisible = false;
  iaLoading = false;
  trailAnalysis?: TrailAnalysis;

  constructor(
    private trailService: TrailService,
    private aiService: AiAnalyzerService
  ) {}

  ngOnInit(): void {
    console.log('Iniciando componente Trails');

    this.trailService.getTrails().subscribe({
      next: (res) => {
        this.trails = res;
        console.log('Senderos cargados:', this.trails);
      },
      error: (err) => {
        console.error('Error al cargar senderos:', err);
      },
      complete: () => console.log('Terminando componente Trails'),
    });
  }

  showDetail(trail: TrailDto): void {
    console.log('Detalle del sendero:', trail);
  }

  analyzeTrailsWithIA(): void {
    this.iaModalVisible = true;
    this.iaLoading = true;
    this.trailAnalysis = undefined;

    this.aiService.analyzeTrails().subscribe({
      next: (res) => {
        console.log('[IA Trails] análisis recibido:', res);
        this.trailAnalysis = res;
        this.iaLoading = false;
      },
      error: (err) => {
        console.error('[IA Trails] error:', err);
        this.iaLoading = false;
      }
    });
  }

  closeIaModal(): void {
    this.iaModalVisible = false;
  }

  formatTime(minutes: number | undefined): string {
    if (!minutes) return '-';
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return h ? `${h}h ${m}m` : `${m}m`;
  }
}
