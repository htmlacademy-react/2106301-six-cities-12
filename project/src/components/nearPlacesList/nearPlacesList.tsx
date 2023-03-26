import {Offers} from '../../types/offer';
import {CityCard} from '../cityCard/cityCard';

type NearPlacesListProps = {
  offers: Offers;
}

export function NearPlacesList ({offers}: NearPlacesListProps) {

  return(
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {/*TODO Тут должены бать карточки ближайших предложений*/}
        {offers.map((offer) => <CityCard key={offer.id} offer={offer}/>)}
      </div>
    </section>
  );
}
