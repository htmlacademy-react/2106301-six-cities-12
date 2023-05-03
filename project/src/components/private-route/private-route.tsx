import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../consts';
import {useAppSelector} from '../../hooks';
import {getAuthStatus} from '../../store/user-process/user-process.selectors';


type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute ({ children}: PrivateRouteProps) {
  const authStatus = useAppSelector(getAuthStatus);

  return(
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.Login}/>
  );
}
