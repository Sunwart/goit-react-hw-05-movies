import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getActors } from 'services/API-service';
import { ReactComponent as NotFound } from '../../icons/not-found.svg';
import {
  Container,
  CastList,
  CastItem,
  Photo,
  CastItemContainer,
  Character,
  Name,
} from './Cast.styled';

export default function Cast() {
  const location = useLocation();
  const temp = location.pathname.slice(8);
  const id = temp.slice(-temp.length, -5);

  const [actors, setActors] = useState([]);

  useEffect(() => {
    getActors(id).then(res => {
      setActors([...res.data.cast]);
    });
  }, [id]);

  if (actors.length !== 0) {
    return (
      <Container>
        <CastList>
          {actors.map(({ id, name, character, profile_path }) => (
            <CastItem key={id}>
              <CastItemContainer>
                {profile_path ? (
                  <Photo
                    src={`https://www.themoviedb.org/t/p/w500/${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <NotFound width={220} height={320} />
                )}
                <Name>{name}</Name>
                <Character>
                  <b>Character:</b> {character}
                </Character>
              </CastItemContainer>
            </CastItem>
          ))}
        </CastList>
      </Container>
    );
  } else return '';
}
