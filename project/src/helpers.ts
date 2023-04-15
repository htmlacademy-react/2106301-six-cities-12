import {Offers} from './types/offer';
// Функция для сортировки по определенному параметру
export const sortOffers = (currentOffers: Offers, sortOption: string) => {
  if (sortOption === 'Popular') {
    return [...currentOffers].sort((a, b) => Number(b.isPremium) - Number(a.isPremium));
  } else if (sortOption === 'Price: low to high') {
    return [...currentOffers].sort((a, b) => a.price - b.price);
  } else if (sortOption === 'Price: high to low') {
    return [...currentOffers].sort((a, b) => b.price - a.price);
  } else if (sortOption === 'Top rated first') {
    return [...currentOffers].sort((a, b) => a.rating + b.rating);
  } else {
    return currentOffers;
  }
};
