import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { ReactComponent as NotFound } from '../../icons/not-found.svg';

import {
  Container,
  Title,
  MoviesList,
  Movie,
  MoviePoster,
  MovieLink,
} from './Movies.styled';

export default function Movies({ movies, title }) {
  const location = useLocation();
  return (
    <Container>
      <Title>{title}</Title>
      <MoviesList>
        {movies.map(({ id, title, poster_path, release_date }) => (
          <Movie key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <p>
                {title} ({release_date.slice(0, 4)})
              </p>
              {poster_path ? (
                <MoviePoster
                  src={`https://www.themoviedb.org/t/p/w500/${poster_path}`}
                  alt={title}
                />
              ) : (
                <NotFound width={280} />
              )}
            </MovieLink>
          </Movie>
        ))}
      </MoviesList>
    </Container>
  );
}

Movie.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
    }).isRequired
  ),
  title: PropTypes.string,
};
