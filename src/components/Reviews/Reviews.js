import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'services/API-service';

import { Container, Name } from './Reviews.styled';

export default function Reviews() {
  const location = useLocation();
  const temp = location.pathname.slice(8);
  const id = temp.slice(-temp.length, -8);

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews(id).then(res => {
      setReviews([...res.data.results]);
      setLoading(false);
    });
  }, [id]);

  if (loading === true) {
    return (
      <Container>
        <p>Loading... .. ..</p>
      </Container>
    );
  }

  if (reviews.length !== 0) {
    return (
      <Container>
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <Name>Author: {author}</Name>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </Container>
    );
  } else {
    return (
      <Container>
        <p>We don't have any reviews for this movie.</p>
      </Container>
    );
  }
}
