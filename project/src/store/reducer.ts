import {createReducer} from '@reduxjs/toolkit';
import {addCity, addOffers} from './actions';
import {offers} from '../mocks/offers';
import {Offers} from '../types/offer';

const emptyOfferList: Offers = [];

const initialState = {
  city: '',
  offers: emptyOfferList
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addCity, (state) => {
      state.city = 'Paris';
    })
    .addCase(addOffers, (state) => {
      state.offers = offers;
    });
});
