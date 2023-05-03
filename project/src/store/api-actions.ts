import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch} from '../types/state';
import {AxiosInstance} from 'axios';
import {Offers} from '../types/offer';
import {APIRoute} from '../consts';
import {AuthData} from '../types/authData';
import {dropToken, saveToken} from '../services/token';
import {User} from '../types/user';

export const fetchGetOffersList = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'getOffers',
  async (arg, {dispatch, extra: api}) => {
    const response = await api.get<Offers>(APIRoute.Offers);
    return response.data;
  }
);

export const fetchAuthStatus = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'isAuth',
  async (arg, {dispatch, extra: api}) => {
    const response = await api.get<User>(APIRoute.Login);
    return response.data;
  }
);

export const fetchUserLogin = createAsyncThunk<User, AuthData, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'userLogin',
  async (arg, {dispatch, extra: api}) => {
    const response = await api.post<User>(APIRoute.Login, arg);
    saveToken(response.data.token);
    return response.data;
  }
);

export const fetchLogOut = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'userLogOut',
  async (arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.LogOut);
    dropToken();
  }
);

