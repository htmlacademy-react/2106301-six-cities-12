import {NavLink} from 'react-router-dom';

export function NavBar() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <NavLink to={'paris'}
              className={({isActive}) => isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
            >
              <span>Paris</span>
            </NavLink>
          </li>
          <li className="locations__item">
            <NavLink to={'cologne'}
              className={({isActive}) => isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
            >
              <span>Cologne</span>
            </NavLink>
          </li>
          <li className="locations__item">
            <NavLink to={'brussels'}
              className={({isActive}) => isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
            >
              <span>Brussels</span>
            </NavLink>
          </li>
          <li className="locations__item">
            <NavLink to={'amsterdam'}
              className={({isActive}) => isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
            >
              <span>Amsterdam</span>
            </NavLink>
          </li>
          <li className="locations__item">
            <NavLink to={'hamburg'}
              className={({isActive}) => isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
            >
              <span>Hamburg</span>
            </NavLink>
          </li>
          <li className="locations__item">
            <NavLink to={'dusseldorf'}
              className={({isActive}) => isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
            >
              <span>Dusseldorf</span>
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
}
