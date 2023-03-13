import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {useState} from 'react';

type CityCardProps = {
  offer: Offer
}

export function CityCard ({offer}: CityCardProps) {
  const [isPremium, setIsPremium] = useState(offer.isPremium)
  const [onFocus, setOnFocus] = useState(0)

  const onFocusHandle = () => {
    setOnFocus(offer.id)
  }

  const unFocusHandle = () => {
    setOnFocus(0)
  }

  const premium = () => {
    return(
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )
  }

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={onFocusHandle}
      onMouseLeave={unFocusHandle}
    >
      {isPremium ? premium() : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/room/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80 %'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/room/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
