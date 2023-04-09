import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers} from './actions';
import {offers} from '../mocks/offers';
// import {Offers} from '../types/offer';

// const emptyOfferList: Offers = [];

const initialState = {
  city: 'Paris',
  offers: offers
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state) => {
      state.offers = offers;
    });
});
