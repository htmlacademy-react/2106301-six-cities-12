import {NavBar} from '../../components/navBar/navBar';
import {OffersList} from '../../components/offersList/offersList';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {setOffers} from '../../store/actions';

export function HomePage () {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  useEffect(() => {
    dispatch(setOffers);
  }, [city]);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <NavBar/>
        <OffersList city={city} offers={offers}/>
      </main>
    </div>
  );
}
