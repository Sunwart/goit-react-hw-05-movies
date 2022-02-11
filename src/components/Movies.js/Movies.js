import { Link } from 'react-router-dom';

export default function Movies({ movies, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
