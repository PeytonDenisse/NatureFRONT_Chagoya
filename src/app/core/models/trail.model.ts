
export interface TrailDto {
  id: number;
  name: string;
  distanceKm: number;
  estimatedTimeMinutes: number;
  difficulty: string;
  isLoop: boolean;
  path: [number, number][];
}
