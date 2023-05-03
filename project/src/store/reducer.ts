import {createReducer} from '@reduxjs/toolkit';
import {isAuth, isOffersLoad, setCity, setCurrentMarker, setOffers, setSortOption, setUser} from './actions';
import {Offers} from '../types/offer';
import {AuthorizationStatus} from '../consts';
import {User} from '../types/user';

export type InitialStateTypes = {
  city: string;
  offers: Offers;
  sortOption: string;
  currentMarker: number;
  isOffersLoad: boolean;
  authorizationStatus: string;
  user?: User ;
};

const initialState: InitialStateTypes = {
  city: 'Paris',
  offers: [],
  sortOption: 'Popular',
  currentMarker: 0,
  isOffersLoad: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    // готово
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    })
    // готово
    .addCase(setCurrentMarker, (state, action) => {
      state.currentMarker = action.payload;
    })
    .addCase(isOffersLoad, (state, action) => {
      state.isOffersLoad = action.payload;
    })
    .addCase(isAuth, (state , action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});
