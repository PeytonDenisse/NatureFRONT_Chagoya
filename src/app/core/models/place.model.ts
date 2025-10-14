export interface Photo {
  id: number;
  url: string;
  caption?: string;
}

export interface Amenity {
  id: number;
  name: string;
}

export interface PlaceAmenity {
  placeId: number;
  amenityId: number;
  amenity?: Amenity;   // viene anidado desde la API
}

export interface Place {
  id: number;
  name: string;
  description: string;
  category: string;
  latitude: number;
  longitude: number;
  elevationMeters: number;
  accessible: boolean;
  entryFee: number;
  openingHours: string;
  createdAt: string;
         // si luego lo necesitas en detalle
}
export interface Photo {
  id: number;
  placeId: number;
  url: string;
  description?: string;
}
