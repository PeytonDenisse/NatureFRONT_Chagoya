import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../../../core/services/place.services';
import { Amenity, Photo, Place } from '../../../core/models/place.model';

@Component({
  standalone: true,
  selector: 'app-place-detail',
  imports: [CommonModule],
  templateUrl: './place-detail.html'
})
export class PlaceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private svc = inject(PlaceService);
  place?: Place;
  amenity?: Amenity;
  photo?: Photo;


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.svc.getById(id).subscribe({ next: p => this.place = p });
  }
}
