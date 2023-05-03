import {useParams} from 'react-router-dom';
import {ReviewOfferForm} from '../../components/review-offer-form/review-offer-form';
import {ReviewList} from '../../components/review-list/review-list';
import {Map} from '../../components/map/map';
import {NearPlacesList} from '../../components/near-places-list/near-places-list';
import {useAppSelector} from '../../hooks';
import {getOffers} from '../../store/offers-list/offers-list.selectors';

export function OfferPage() {
  const offers = useAppSelector(getOffers);
  const roomNumber = useParams();
  const filterRoom = offers.filter((offer) => offer.id.toString() === roomNumber.id);
  const mainRoom = filterRoom[0];

  return (
    <div className="page">
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {mainRoom.images.map((image) => (
                <div key={image} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {mainRoom.isPremium ? <div className="property__mark"><span>Premium</span></div> : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {mainRoom.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{mainRoom.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {mainRoom.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {mainRoom.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {mainRoom.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{mainRoom.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {mainRoom.goods.map((good) => <li key={good} className="property__inside-item">{good}</li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={mainRoom.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {mainRoom.host.name}
                  </span>
                  {mainRoom.host.isPro ? <span className="property__user-status">Pro</span> : null}
                </div>
                <div className="property__description">
                  <p className="property__text">{mainRoom.description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ReviewList/>
                <ReviewOfferForm/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={offers}/>
          </section>
        </section>
        <div className="container">
          <NearPlacesList offers={offers}/>
        </div>
      </main>
    </div>
  );
}
