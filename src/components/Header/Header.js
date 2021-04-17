import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

export function Header(props) {
  const [loading, setLoading] = useState(false);
  const searchInput = useRef();

  const onSearch = (event) => {
    event.preventDefault();
    console.log("form submit. Search ref:", searchInput.current.value);
    props.onSearch(searchInput.current.value);
  };

  return (
    <header className="container flex-column align-items-center">
      <h1 className="text-primary mb-0 title">#ILUIGBO</h1>
      <p className="small slogan">mmanụ ndị Igbo ji eri okwu</p>
      <form
        className="search-form form-group col-sm-6 ml-auto mr-auto"
        onSubmit={onSearch}
      >
        <p className="text-center small">
          Collection of over <span className="font-weight-bold">1000</span> Igbo
          proverbs. Searchable by topics or constituent words in both Igbo and
          English
        </p>
        <div className="input-group">
          <input
            className="form-control"
            id="search"
            aria-label="search form"
            placeholder="e.g. humility, leopard or nwata"
            ref={searchInput}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={loading}
            >
              {loading && <FontAwesomeIcon icon={faSpinner} spin />}
              {loading ? " Searching..." : "Search"}
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}
