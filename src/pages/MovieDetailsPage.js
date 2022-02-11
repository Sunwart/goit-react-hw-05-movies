import { useParams, NavLink, Outlet } from 'react-router-dom';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  return (
    <>
      <p>Movie</p>
      <ul>
        <li>
          <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
