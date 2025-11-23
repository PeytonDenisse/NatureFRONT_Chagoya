// IA para Places

export interface PlaceIaSummary {
  totalPlaces: number;
  totalReviews: number;
  averageRatingGlobal: number;
  averageTrailsPerPlace: number;
  averagePhotosPerPlace: number;
}

export interface PlaceRankingItem {
  id: number;
  name: string;
  averageRating: number;
  reviewCount?: number;
  trailCount?: number;
  entryFee?: number | null;
  accessible?: boolean;
}

export interface PlaceRankings {
  topRatedOverall: PlaceRankingItem[];
  bestForHiking: PlaceRankingItem[];
  mostPopular: PlaceRankingItem[];
}

export interface PlaceHiddenGem {
  id: number;
  name: string;
  averageRating: number;
  reviewCount: number;
}

export interface PlaceFeatured {
  hiddenGems: PlaceHiddenGem[];
  topFreePlaces: PlaceRankingItem[];
  accessibleHighlights: PlaceRankingItem[];
}

export interface PlaceCategoryStat {
  category: string;
  placeCount: number;
  averageRating: number;
  averageReviewsPerPlace: number;
}

export interface PlaceAccessibilityStats {
  accessiblePlaces: number;
  nonAccessiblePlaces: number;
}

export interface PlaceAnalysis {
  summary: PlaceIaSummary;
  rankings: PlaceRankings;
  featured: PlaceFeatured;
  categoryStats: PlaceCategoryStat[];
  accessibilityStats: PlaceAccessibilityStats;
  patterns: string[];
}
