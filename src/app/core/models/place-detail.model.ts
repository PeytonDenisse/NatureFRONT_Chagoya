import { AmenityDto } from './amenity.models';
import { PhotoDto } from './photo.model';
import { TrailDto } from './trail.model';

export interface PlaceDetailDto {
  id: number;
  name: string;
  category: string;
  description?: string | null;

  latitude: number;
  longitude: number;

  elevationMeters?: number | null;
  accessible: boolean;

  entryFee?: number | null;
  openingHours?: string | null;

  amenities: AmenityDto[];
  photos: PhotoDto[];
  trails: TrailDto[];
}
