import {Link, useNavigate} from 'react-router-dom';
import {AppRoutes} from '../../consts';
import React, {useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {fetchUserLogin} from '../../store/api-actions';
import {setCity} from '../../store/offers-list/offers-list';

export function LoginPage () {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit = (event: React.FormEvent) => {
    if(userData.password.length < 1) {
      event.preventDefault();
    } else {
      event.preventDefault();
      dispatch(fetchUserLogin(userData));
      navigate(AppRoutes.Main);
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoutes.Main} className="header__logo-link">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              onSubmit={onSubmit}
              method="post"
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={userData.email}
                  onChange={(event) => setUserData({...userData, email: event.target.value})}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={userData.password}
                  onChange={(event) => setUserData({...userData, password: event.target.value})}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                to={AppRoutes.Main}
                className="locations__item-link"
                onClick={() => dispatch(setCity('Amsterdam'))}
              >
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
