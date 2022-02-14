import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMoviesByQuery } from 'services/API-service';

import Searchbar from 'components/Searchbar/Searchbar';
import Movies from 'components/Movies.js/Movies';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (location.search) {
      getMoviesByQuery(location.search).then(movies => {
        if (movies.data.results.length === 0) {
          alert(
            'Oooooooops, nothing found! Please, try different search query.'
          );
        } else {
          setMovies([...movies.data.results]);
        }
      });
    }
  }, [location.search, searchParams]);

  const handleSearchFormSubmit = newQuery => {
    if (newQuery !== location.search.slice(7)) {
      setMovies([]);
      setSearchParams({ query: newQuery });
    } else {
      return;
    }
  };

  return (
    <main>
      <Searchbar onSubmit={handleSearchFormSubmit} />
      <Movies movies={movies} />
    </main>
  );
}
