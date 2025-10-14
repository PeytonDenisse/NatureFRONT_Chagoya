import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailService } from '../../../core/services/trail.service';
import { Trail } from '../../../core/models/trail.model';

@Component({
  standalone: true,
  selector: 'app-trails-list',
  imports: [CommonModule],
  templateUrl: './trails-list.html'
})
export class TrailsListComponent implements OnInit {
  private svc = inject(TrailService);
  trails: Trail[] = [];
  ngOnInit(): void { this.svc.getAll().subscribe({ next: t => this.trails = t }); }
}
