import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setSortOption} from '../../store/actions';

export function SortingForm() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const dispatch = useAppDispatch();
  const sortOption = useAppSelector((state) => state.sortOption);

  const dropDownHandle = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={dropDownHandle}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
      >
        {sortOption}
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={openDropDown
          ? 'places__options places__options--custom places__options--opened'
          : 'places__options places__options--custom'}
      >
        <li
          className="places__option places__option--active"
          tabIndex={0}
          onClick={() => dispatch(setSortOption('Popular'))}
        >
          Popular
        </li>
        <li
          className="places__option"
          tabIndex={0}
          onClick={() => dispatch(setSortOption('Price: low to high'))}
        >
          Price: low to high
        </li>
        <li
          className="places__option"
          tabIndex={0}
          onClick={() => dispatch(setSortOption('Price: high to low'))}
        >
          Price: high to low
        </li>
        <li
          className="places__option"
          tabIndex={0}
          onClick={() => dispatch(setSortOption('Top rated first'))}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}
