import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Offers} from '../../types/offer';
import {fetchGetFavorites, fetchGetOffersList} from '../api-actions';
import {NameSpace} from '../../consts';

type InitialStateType = {
  offers: Offers;
  city: string;
  sortOption: string;
  currentMarker: number;
  isOffersLoad: boolean;
  favorites: Offers;
}

const initialState:InitialStateType = {
  offers: [],
  city: 'Paris',
  sortOption: 'Popular',
  currentMarker: 0,
  isOffersLoad: false,
  favorites: []
};
export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setCurrentMarker: (state, action: PayloadAction<number>) => {
      state.currentMarker = action.payload;
    },
    setSortOption: (state, action: PayloadAction<string>) => {
      state.sortOption = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGetOffersList.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoad = false;
      })
      .addCase(fetchGetOffersList.pending, (state) => {
        state.isOffersLoad = true;
      })
      .addCase(fetchGetFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  }
});

export const {setCurrentMarker, setSortOption,setCity} = offersData.actions;
