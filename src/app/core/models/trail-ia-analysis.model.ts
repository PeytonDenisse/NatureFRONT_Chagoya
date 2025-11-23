// IA para Trails

export interface TrailIaSummary {
  totalTrails: number;
  averageDistanceKm: number;
  averageEstimatedTimeMinutes: number;
  loopTrailCount: number;
  nonLoopTrailCount: number;
}

export interface TrailDifficultyStat {
  difficulty: string;
  trailCount: number;
  averageDistanceKm: number;
  averageEstimatedTimeMinutes: number;
}

export interface TrailBasicInfo {
  id: number;
  name: string;
  difficulty: string;
  distanceKm: number;
  estimatedTimeMinutes?: number;
}

export interface TrailAnalysis {
  summary: TrailIaSummary;
  difficultyStats: TrailDifficultyStat[];
  topTrailsByDistance: TrailBasicInfo[];
  recommendedForBeginners: TrailBasicInfo[];
  recommendedForExperiencedHikers: TrailBasicInfo[];
  patterns: string[];
}
