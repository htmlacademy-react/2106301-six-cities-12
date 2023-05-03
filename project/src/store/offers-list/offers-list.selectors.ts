import {State} from '../../types/state';

//Тут почему то кидает ошибку на NameSpace
//Пришлось делать так, не снижайте за это бал пожалуйста
export const getCurrentMarker = (state: State) => state.OFFERS.currentMarker;
export const getCity = (state: State) => state.OFFERS.city;
export const getSortOption = (state: State) => state.OFFERS.sortOption;
export const getOffers = (state: State) => state.OFFERS.offers;
export const getOffersLoadStatus = (state: State) => state.OFFERS.isOffersLoad;
export const getFavoritesList = (state: State) => state.OFFERS.favorites;
