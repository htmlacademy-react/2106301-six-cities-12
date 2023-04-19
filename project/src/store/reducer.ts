import {createReducer} from '@reduxjs/toolkit';
import {isOffersLoad, setCity, setCurrentMarker, setOffers, setSortOption} from './actions';
import {Offers} from '../types/offer';

export type InitialStateTypes = {
  city: string;
  offers: Offers;
  sortOption: string;
  currentMarker: number;
  isOffersLoad: boolean;
};

const initialState: InitialStateTypes = {
  city: 'Paris',
  offers: [],
  sortOption: 'Popular',
  currentMarker: 0,
  isOffersLoad: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(setCurrentMarker, (state, action) => {
      state.currentMarker = action.payload;
    })
    .addCase(isOffersLoad, (state, action) => {
      state.isOffersLoad = action.payload;
    });
});
