import {NavBar} from '../../components/navBar/navBar';
import {OffersList} from '../../components/offersList/offersList';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {setOffers} from '../../store/actions';
import {Offers} from '../../types/offer';
import {sortOffers} from '../../helpers';

export function HomePage() {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const sortOption = useAppSelector((state) => state.sortOption);

  useEffect(() => {
    dispatch(setOffers);
  }, [city]);

  const currentOffers = offers.filter((offer) => offer.city.name === city);
  const sortedOffers: Offers = sortOffers(currentOffers, sortOption);
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <NavBar/>
        <OffersList city={city} offers={sortedOffers}/>
      </main>
    </div>
  );
}
