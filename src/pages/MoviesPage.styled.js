import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  background-color: #073763;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const LinksList = styled.ul`
  display: flex;
  padding: 16px;
  gap: 16px;
  margin: 0;
`;

export const AddInfoLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 300ms linear;
  padding: 16px;

  :hover {
    color: #3d85c6;
  }

  &.active {
    color: #3d85c6;
  }
`;

export const Title = styled.h2`
  margin: 10px 16px 8px 16px;
`;
