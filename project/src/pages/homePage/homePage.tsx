import {NavBar} from '../../components/navBar/navBar';
import {OffersList} from '../../components/offersList/offersList';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Offers} from '../../types/offer';
import {sortOffers} from '../../helpers';
import {fetchGetOffersList} from '../../store/apiActions';
import {Loader} from '../../loader/loader';
import {useEffect} from 'react';

export function HomePage() {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const sortOption = useAppSelector((state) => state.sortOption);
  const isOffersLoad = useAppSelector((state) => state.isOffersLoad);

  // dispatch(fetchGetOffersList())

  useEffect(() => {
    dispatch(fetchGetOffersList());
  }, [dispatch]);

  const currentOffers = offers.filter((offer) => offer.city.name === city);
  const sortedOffers: Offers = sortOffers(currentOffers, sortOption);
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <NavBar/>
        {isOffersLoad ? <Loader/> : <OffersList city={city} offers={sortedOffers}/>}
      </main>
    </div>
  );
}
