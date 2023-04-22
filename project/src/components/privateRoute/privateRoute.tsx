import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../consts';
import {useAppSelector} from '../../hooks';


type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute ({ children}: PrivateRouteProps) {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return(
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.Login}/>
  );
}
