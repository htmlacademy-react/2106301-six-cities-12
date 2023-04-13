import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer';

export const setCity = createAction<string>('setCity');
export const setOffers = createAction<Offers>('setOffers');
export const setSortOption = createAction<string>('setSortOption');
