import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieByID } from 'services/API-service';
import { Container, PosterImg } from './SingleMovie.styled';
import { ReactComponent as NotFound } from '../../icons/not-found.svg';

export default function SingleMovie({ movieID }) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieByID(movieID).then(res => {
      setMovie(res.data);
      setLoading(false);
    });
  }, [movieID]);

  const {
    poster_path,
    title,
    release_date,
    vote_average = 0,
    overview,
    genres,
  } = movie;

  return (
    <Container>
      {loading === true ? (
        <p>Loading ... .. ..</p>
      ) : (
        <>
          {poster_path ? (
            <PosterImg
              src={`https://www.themoviedb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
          ) : (
            <NotFound width={280} />
          )}
          <div>
            {title && (
              <h1>
                {title} ({release_date.slice(0, 4)})
              </h1>
            )}
            <p>User score: {vote_average * 10}%</p>
            {overview && (
              <>
                <h3>Overview</h3>
                <p> {overview} </p>
              </>
            )}
            {genres && (
              <>
                <h3>Genres</h3>
                <p>{genres.map(genre => genre.name).join(', ')}</p>
              </>
            )}
          </div>
        </>
      )}
    </Container>
  );
}

SingleMovie.propTypes = {
  movieID: PropTypes.string.isRequired,
};
