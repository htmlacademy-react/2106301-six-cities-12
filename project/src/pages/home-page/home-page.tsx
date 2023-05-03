import {NavBar} from '../../components/nav-bar/nav-bar';
import {OffersList} from '../../components/offers-list/offers-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Offers} from '../../types/offer';
import {sortOffers} from '../../helpers';
import {fetchGetFavorites, fetchGetOffersList} from '../../store/api-actions';
import {Loader} from '../../loader/loader';
import {useEffect} from 'react';
import {getCity, getOffers, getOffersLoadStatus, getSortOption} from '../../store/offers-list/offers-list.selectors';

export function HomePage() {
  const dispatch = useAppDispatch();
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const sortOption = useAppSelector(getSortOption);
  const isOffersLoad = useAppSelector(getOffersLoadStatus);

  useEffect(() => {
    dispatch(fetchGetOffersList());
    dispatch(fetchGetFavorites());
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
