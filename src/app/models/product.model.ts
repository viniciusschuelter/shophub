

export interface ProductInterface {
  id: string;
  sku: string;
  brand: string;
  name: string;
  colorway: string;
  gender: string;
  silhouette: string;
  releaseYear: string;
  releaseDate: string;
  retailPrice: string;
  estimatedMarketValue: string;
  story: string;
  image: ProductImage,
  links: ProcuctLinks,
  rating: number;
  color: string;
}

export interface ProductImage {
  360: string[];
  original: string;
  small: string;
  thumbnail: string;
}

export interface ProcuctLinks {
  stockX: string;
  goat: string;
  flightClub: string;
  stadiumGoods: string;
}
