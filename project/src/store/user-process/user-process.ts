import {UserProcess} from '../../types/user-process';
import {AuthorizationStatus, NameSpace} from '../../consts';
import {createSlice} from '@reduxjs/toolkit';
import {fetchAuthStatus, fetchLogOut, fetchUserLogin} from '../api-actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setNoAuthStatus: (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAuthStatus.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchAuthStatus.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchAuthStatus.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(fetchUserLogin.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(fetchUserLogin.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(fetchLogOut.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
        state.user = null;
      });
  }
});

export const {setNoAuthStatus} = userProcess.actions;
