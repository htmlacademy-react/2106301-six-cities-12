import {AuthorizationStatus} from '../consts';
import {User} from './user';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
 }
