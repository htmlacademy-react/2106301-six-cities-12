import {NavBar} from '../../components/navBar/navBar';
import {OffersList} from '../../components/offersList/offersList';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {setOffers} from '../../store/actions';
import {Offers} from '../../types/offer';

export function HomePage() {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const sortOption = useAppSelector((state) => state.sortOption);

  useEffect(() => {
    dispatch(setOffers);
  }, [city]);

  const currentOffers = offers.filter((offer) => offer.city.name === city);

  const sortOffers = (currentOffers: Offers, sortOption: string) => {
    if (sortOption === 'Popular') {
      return [...currentOffers].sort((a, b) => Number(b.isPremium) - Number(a.isPremium));
    } else if (sortOption === 'Price: low to high') {
      return [...currentOffers].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'Price: high to low') {
      return [...currentOffers].sort((a, b) => b.price - a.price);
    } else if (sortOption === 'Top rated first') {
      return [...currentOffers].sort((a, b) => a.rating + b.rating);
    } else {
      return currentOffers;
    }
  };

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
