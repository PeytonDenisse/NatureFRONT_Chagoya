export interface Trail {
  id: number;
  placeId: number;
  name: string;
  distanceKm: number;
  difficulty: 'easy'|'moderate'|'hard';
  estimatedTimeMin: number;
  isLoop: boolean;
}
