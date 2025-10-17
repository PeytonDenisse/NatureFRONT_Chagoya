import { Component, OnInit } from '@angular/core';
import { TrailService } from '../../core/services/trail.service';
import { TrailDto } from '../../core/models/trail.model';

@Component({
  selector: 'app-trails',
  templateUrl: './trails.html',
  styleUrls: ['./trails.scss'],
  standalone: false,
})
export class Trails implements OnInit {
  trails: TrailDto[] = [];

  constructor(private trailService: TrailService) {}

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


  formatTime(minutes: number | undefined): string {
    if (!minutes) return '-';
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return h ? `${h}h ${m}m` : `${m}m`;
  }
}
