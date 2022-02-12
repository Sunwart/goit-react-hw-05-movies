import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 16px;
`;

export const Title = styled.h1`
  font-size: 24px;
  padding: 16px;
  text-align: center;
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 32px;
`;

export const Movie = styled.li`
  display: flex;
  width: 280px;
  height: 440px;
  transition: transform 300ms linear;
  &:hover {
    transform: scale(1.05);
  }
`;

export const MoviePoster = styled.img`
  width: 280px;
  height: 400px;
  border-radius: 4px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: #073763;
`;
