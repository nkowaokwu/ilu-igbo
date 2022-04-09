import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Chip } from '@material-ui/core';

export function Header({ onSearch, isSearching, count, totalCount, query }) {
  const searchInput = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchInput.current.value);
  };

  const handleClear = (event) => {
    searchInput.current.value = '';
    onSearch();
  };

  return (
    <header className="container flex-column align-items-center">
      <h1 className="text-primary mb-0 title">
        <Link to="/">#ILUIGBO</Link>
      </h1>
      <p className="small slogan">mmanụ ndị Igbo ji eri okwu</p>
      <form
        className="search-form form-group col-sm-6 ml-auto mr-auto"
        onSubmit={handleSearch}
      >
        <p className="text-center small">
          Collection of over{' '}
          <span className="font-weight-bold">
            {totalCount || <FontAwesomeIcon icon={faSpinner} spin />}
          </span>{' '}
          Igbo proverbs. Searchable by topics or constituent words in both Igbo
          and English
        </p>
        <div className="input-group">
          <input
            className="form-control"
            id="search"
            aria-label="search form"
            placeholder="e.g. nkita, tortoise or nwata"
            ref={searchInput}
            onChange={handleSearch}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isSearching}
            >
              {isSearching && <FontAwesomeIcon icon={faSpinner} spin />}
              {isSearching ? ' Searching...' : 'Search'}
            </button>
          </div>
        </div>
        {query && (
          <p className="text-center small my-3">
            <span className="font-weight-bold">
              {count || <FontAwesomeIcon icon={faSpinner} spin />}
            </span>{' '}
            proverbs found{' '}
            <Chip
              icon={<FontAwesomeIcon icon={faTimes} />}
              label=" Clear Search"
              onClick={handleClear}
            />
          </p>
        )}
      </form>
    </header>
  );
}
