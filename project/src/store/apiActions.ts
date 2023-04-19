import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch} from '../types/state';
import {AxiosInstance} from 'axios';
import {Offers} from '../types/offer';
import {APIRoute, AuthorizationStatus} from '../consts';
import {isAuth, isOffersLoad, setOffers} from './actions';
import {api} from "./index";

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

export const fetchAuthStatus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'isAuth',
  async (arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(isAuth(AuthorizationStatus.Auth));
    } catch {
      dispatch(isAuth(AuthorizationStatus.NoAuth));
    }
  }
)
