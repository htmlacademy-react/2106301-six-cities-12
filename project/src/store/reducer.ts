import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers, setSortOption} from './actions';
import {offers} from '../mocks/offers';

const initialState = {
  city: 'Paris',
  offers: offers,
  sortOption: 'Popular'
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
    });
});
