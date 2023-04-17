import {createReducer} from '@reduxjs/toolkit';
import {setCity, setCurrentMarker, setOffers, setSortOption} from './actions';
import {offers} from '../mocks/offers';

const initialState = {
  city: 'Paris',
  offers: offers,
  sortOption: 'Popular',
  currentMarker: 0
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state) => {
      state.offers = offers;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(setCurrentMarker, (state, action) => {
      state.currentMarker = action.payload;
    });
});
