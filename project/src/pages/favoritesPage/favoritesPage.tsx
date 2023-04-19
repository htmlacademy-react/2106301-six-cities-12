import {Link} from 'react-router-dom';
import {FavoritesCard} from '../../components/favoritesCard/favoritesCard';
import {useAppSelector} from '../../hooks';

export function FavoritesPage() {
  const offers = useAppSelector((state) => state.offers);
  const citiesArray:string[] = [];
  offers.forEach((offer) => citiesArray.push(offer.city.name));
  const onlyCitiesNames = new Set(citiesArray);
  const uniqCitiesArray = Array.from(onlyCitiesNames);

  const renderCities = uniqCitiesArray.map((city) => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city);

    return (
      <li key={city} className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={`/${city}`}>
              <span>{city}</span>
            </Link>
          </div>
        </div>
        <div className="favorites__places">
          {filteredOffers.map((offer) => <FavoritesCard offer={offer} key={offer.id} />)}
        </div>
      </li>
    );
  });

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {renderCities}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
