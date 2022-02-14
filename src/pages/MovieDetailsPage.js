import { useParams, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import SingleMovie from 'components/SingleMovie/SingleMovie';

import {
  Container,
  Title,
  LinksList,
  AddInfoLink,
  BackLink,
  ArrowIcon,
} from './MoviesPage.styled';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();

  return (
    <>
      <BackLink to={location?.state?.from || '/'}>
        <ArrowIcon />
        Go back
      </BackLink>

      <SingleMovie movieID={movieId} />
      <Container>
        <Title>Additional information:</Title>
        <LinksList>
          <li>
            <AddInfoLink
              to={`/movies/${movieId}/cast`}
              state={{ from: location?.state?.from ?? '/' }}
            >
              Cast
            </AddInfoLink>
          </li>
          <li>
            <AddInfoLink
              to={`/movies/${movieId}/reviews`}
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviews
            </AddInfoLink>
          </li>
        </LinksList>
      </Container>
      <Outlet />
    </>
  );
}
