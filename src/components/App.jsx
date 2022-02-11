import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './Layout/Layout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { MovieDetailsPage, HomePage, MoviesPage } from 'pages';

export const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
