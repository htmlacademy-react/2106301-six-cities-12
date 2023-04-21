import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer';
import {User} from '../types/user';

export const setCity = createAction<string>('setCity');
export const setOffers = createAction<Offers>('setOffers');
export const setSortOption = createAction<string>('setSortOption');
export const setCurrentMarker = createAction<number>('setCurrentMarker');

export const isOffersLoad = createAction<boolean>('isOffersLoad');

export const isAuth = createAction<string>('isAuth');

export const setError = createAction<string | null>('setError');

export const setUser = createAction<User>('setUser');
