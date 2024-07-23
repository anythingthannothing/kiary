import React from 'react';

function SearchBar() {
  return (
    <form action={'#'} className={'search'}>
      <input
        type="text"
        className="search__input"
        placeholder={'Search hotels'}
      />
      <button className="search__button">🔍</button>
    </form>
  );
}

export default SearchBar;
