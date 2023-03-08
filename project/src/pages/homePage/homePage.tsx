import {NavBar} from '../../components/navBar/navBar';
import {Outlet} from 'react-router-dom';

export function HomePage () {
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
