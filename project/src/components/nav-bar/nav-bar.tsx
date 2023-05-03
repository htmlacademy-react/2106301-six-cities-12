import {useAppDispatch, useAppSelector} from '../../hooks';
import {setCity} from '../../store/offers-list/offers-list';
import {getCity} from '../../store/offers-list/offers-list.selectors';

export function NavBar() {
  const dispatch = useAppDispatch();
  const city = useAppSelector(getCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <span
              className={city === 'Paris' ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
              onClick={() => dispatch(setCity('Paris'))}
            >
              Paris
            </span>
          </li>
          <li className="locations__item">
            <span
              className={city === 'Cologne' ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
              onClick={() => dispatch(setCity('Cologne'))}
            >
              Cologne
            </span>
          </li>
          <li className="locations__item">
            <span
              className={city === 'Brussels' ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
              onClick={() => dispatch(setCity('Brussels'))}
            >
              Brussels
            </span>
          </li>
          <li className="locations__item">
            <span
              className={city === 'Amsterdam' ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
              onClick={() => dispatch(setCity('Amsterdam'))}
            >
              Amsterdam
            </span>
          </li>
          <li className="locations__item">
            <span
              className={city === 'Hamburg' ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
              onClick={() => dispatch(setCity('Hamburg'))}
            >
              Hamburg
            </span>
          </li>
          <li className="locations__item">
            <span
              className={city === 'Dusseldorf' ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
              onClick={() => dispatch(setCity('Dusseldorf'))}
            >
              Dusseldorf
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
