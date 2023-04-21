import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch} from '../types/state';
import {AxiosInstance} from 'axios';
import {Offers} from '../types/offer';
import {APIRoute, AuthorizationStatus} from '../consts';
import {isAuth, isOffersLoad, setOffers, setUser} from './actions';
import {AuthData} from '../types/authData';
import {dropToken, saveToken} from '../services/token';
import {User} from '../types/user';

export const fetchGetOffersList = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'setError',
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
      const status = await api.get<User>(APIRoute.Login);
      dispatch(setUser(status.data));
      dispatch(isAuth(AuthorizationStatus.Auth));
    } catch {
      dispatch(isAuth(AuthorizationStatus.NoAuth));
    }
  }
);

export const fetchUserLogin = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'userLogin',
  async (data, {dispatch, extra: api}) => {
    // const {data: {token}} = await api.post<User>(APIRoute.Login, data);
    // saveToken(token);
    // dispatch(isAuth(AuthorizationStatus.Auth));
    try {
      const response = await api.post<User>(APIRoute.Login, data);
      saveToken(response.data.token);
      dispatch(isAuth(AuthorizationStatus.Auth));
      dispatch(setUser(response.data));
    } catch {
      dispatch(isAuth(AuthorizationStatus.Unknown));
    }
  }
);

export const fetchLogOut = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'userLogOut',
  async (arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.LogOut);
    dispatch(isAuth(AuthorizationStatus.Unknown));
    dropToken();
  }
);

