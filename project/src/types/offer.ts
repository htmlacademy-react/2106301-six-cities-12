export type Offer = {
  bedrooms: number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
}

export type Cities = {
  Paris: 'Paris';
  Cologne: 'Cologne';
  Brussels: 'Brussels';
  Amsterdam: 'Amsterdam';
  Hamburg: 'Hamburg';
  Dusseldorf: 'Dusseldorf';
}

export type Locations = Location[]
export type Offers = Offer[]


