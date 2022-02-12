import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 32px;
`;

export const CastItem = styled.li`
  display: flex;
  width: 220px;
  height: 400px;
`;

export const Photo = styled.img`
  width: 220px;
  height: 320px;
  border-radius: 4px;
`;

export const CastItemContainer = styled.div`
  text-decoration: none;
  text-align: center;
  color: #073763;
`;

export const Name = styled.h3`
  margin: 0;
  padding: 4px 0;
`;

export const Character = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;
