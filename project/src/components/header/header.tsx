import {Link} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../consts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchAuthStatus, fetchLogOut} from '../../store/api-actions';
import {getAuthStatus, getUser} from '../../store/user-process/user-process.selectors';

export function Header() {
  const auth = useAppSelector(getAuthStatus);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(fetchLogOut());
    dispatch(fetchAuthStatus());
  };

  const notLog = () => (
    <li className="header__nav-item">
      <Link to={AppRoutes.Login} className="header__nav-link">
        <span className="header__signout">Sign in</span>
      </Link>
    </li>
  );

  const log = () => (
    <>
      <li className="header__nav-item user">
        <Link to={AppRoutes.Favorites} className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{user?.email}</span>
          <span className="header__favorite-count">3</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          to={AppRoutes.Main}
          className="header__nav-link"
          onClick={logOut}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoutes.Main} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {auth === AuthorizationStatus.NoAuth && AuthorizationStatus.Unknown ? notLog() : log()}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
