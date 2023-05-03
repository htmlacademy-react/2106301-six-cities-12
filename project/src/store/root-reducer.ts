import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../consts';
import {userProcess} from './user-process/user-process';
import {offersData} from './offers-list/offers-list';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersData.reducer,
});
