import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch} from '../types/state';
import {AxiosInstance} from 'axios';
import {Offers} from '../types/offer';
import {APIRoute} from '../consts';
import {isOffersLoad, setOffers} from './actions';

export const fetchGetOffersList = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'setOffers',
  async (arg, {dispatch, extra: api}) => {
    dispatch(isOffersLoad(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(isOffersLoad(false));
    dispatch(setOffers(data));
  }
);
