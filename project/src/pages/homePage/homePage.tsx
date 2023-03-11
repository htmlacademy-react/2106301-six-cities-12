import {NavBar} from '../../components/navBar/navBar';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

export function HomePage () {
  const location = useLocation();
  const redirect = useNavigate();

  useEffect(() => {
    if(location.pathname === '/') {
      redirect('/paris');
    }
  }, []);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <NavBar/>
        <Outlet/>
      </main>
    </div>
  );
}
