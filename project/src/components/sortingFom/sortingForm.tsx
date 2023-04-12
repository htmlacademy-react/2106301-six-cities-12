import React, {useState} from 'react';

export function SortingForm() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [sortForm, setSortForm] = useState('Popular');

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
        {sortForm}
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
          onClick={() => setSortForm('Popular')}
        >
          Popular
        </li>
        <li
          className="places__option"
          tabIndex={0}
          onClick={() => setSortForm('Price: low to high')}
        >
          Price: low to high
        </li>
        <li
          className="places__option"
          tabIndex={0}
          onClick={() => setSortForm('Price: high to low')}
        >
          Price: high to low
        </li>
        <li
          className="places__option"
          tabIndex={0}
          onClick={() => setSortForm('Top rated first')}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}
