// ===== RESUMEN GENERAL =====
export interface PlaceSummary {
  totalPlaces: number;
  totalReviews: number;
  averageRatingGlobal: number;
  averageTrailsPerPlace: number;
  averagePhotosPerPlace: number;
}

// ===== RANKINGS =====
export interface TopRatedPlace {
  id: number;
  name: string;
  averageRating: number;
  reviewCount: number;
}

export interface BestForHikingPlace {
  id: number;
  name: string;
  trailCount: number;
  averageRating: number;
}

export interface MostPopularPlace {
  id: number;
  name: string;
  reviewCount: number;
  averageRating: number;
}

export interface PlaceRankings {
  topRatedOverall: TopRatedPlace[];
  bestForHiking: BestForHikingPlace[];
  mostPopular: MostPopularPlace[];
}

// ===== FEATURED =====
export interface HiddenGem {
  id: number;
  name: string;
  averageRating: number;
  reviewCount: number;
}

export interface TopFreePlace {
  id: number;
  name: string;
  averageRating: number;
  entryFee: number;
}

export interface AccessibleHighlight {
  id: number;
  name: string;
  averageRating: number;
  accessible: boolean;
}

export interface PlaceFeatured {
  hiddenGems: HiddenGem[];
  topFreePlaces: TopFreePlace[];
  accessibleHighlights: AccessibleHighlight[];
}

// ===== CATEGORY & ACCESSIBILITY =====
export interface CategoryStat {
  category: string;
  placeCount: number;
  averageRating: number;
  averageReviewsPerPlace: number;
}

export interface AccessibilityStats {
  accessiblePlaces: number;
  nonAccessiblePlaces: number;
}

// ===== OBJETO PRINCIPAL QUE USA EL MODAL =====
export interface PlaceAnalysis {
  summary: PlaceSummary;
  rankings: PlaceRankings;
  featured: PlaceFeatured;
  categoryStats: CategoryStat[];
  accessibilityStats: AccessibilityStats;
  patterns: string[];
}

// ===== ENVOLTORIO REAL QUE MANDA LA API =====
export interface PlaceAnalysisApiResponse {
  ai: PlaceAnalysis;
  heroPlaces: HeroPlace[];
}

// Si luego quieres usar heroPlaces en el front, ya está tipado:
export interface HeroPlace {
  id: number;
  name: string;
  category: string;
  averageRating: number;
  reviewCount: number;
  trailCount: number;
  mainPhotoUrl: string | null;
  latitude: number;
  longitude: number;
}
