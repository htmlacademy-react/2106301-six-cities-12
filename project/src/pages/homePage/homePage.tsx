import {NavBar} from '../../components/navBar/navBar';
// import {Outlet} from 'react-router-dom';

import {Cities} from '../../types/offer';
import {OffersList} from '../../components/offersList/offersList';
import {useAppSelector} from '../../hooks';

type HomePageProps = {
  cities: Cities;
}

export function HomePage ({cities}: HomePageProps) {
  const city = useAppSelector((state) => state.city);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <NavBar/>
        <OffersList city={city}/>
      </main>
    </div>
  );
}
