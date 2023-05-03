import {NameSpace} from '../../consts';
import {State} from '../../types/state';

export const getAuthStatus = (state: State) => state[NameSpace.User].authorizationStatus;
export const getUser = (state: State) => state[NameSpace.User].user;
