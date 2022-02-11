import { useState, useEffect } from 'react';
import { getMoviesByQuery } from 'services/API-service';

import Searchbar from 'components/Searchbar/Searchbar';
import Movies from 'components/Movies.js/Movies';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('smile');

  useEffect(() => {
    getMoviesByQuery(query).then(movies => {
      setMovies([...movies.data.results]);
    });
  }, [query]);

  const handleSearchFormSubmit = newQuery => {
    if (newQuery !== query) {
      setMovies([]);
      setQuery(newQuery);
    }
  };

  return (
    <main>
      <Searchbar onSubmit={handleSearchFormSubmit} />
      <Movies movies={movies} title={`Movies by "${query}" request`} />
    </main>
  );
};
