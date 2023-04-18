import {CityCard} from '../cityCard/cityCard';
import React from 'react';
import {Map} from '../map/map';
import {Offers} from '../../types/offer';
import {SortingForm} from '../sortingFom/sortingForm';

type CityListProps = {
  city: string;
  offers: Offers;
}

export function OffersList({city, offers}: CityListProps) {

  const generateOffersList = offers.map((offer) => <CityCard key={offer.id} offer={offer}/>);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {city}</b>
          <SortingForm/>
          <div className="cities__places-list places__list tabs__content">
            {generateOffersList}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <div style={{height: '100%'}}>
              <Map offers={offers}/>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
