import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/API-service';
import Movies from 'components/Movies.js/Movies';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(movies => {
      setMovies([...movies.data.results]);
    });
  }, []);

  return (
    <main>
      <Movies movies={movies} title="Trending today" />
    </main>
  );
};
