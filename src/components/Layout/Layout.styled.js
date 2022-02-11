import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuContainer = styled.nav`
  display: flex;
  color: #fff;
  background-color: #073763;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  gap: 32px;
`;

export const MenuLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 300ms linear;

  :hover {
    color: #9fc5e8;
  }

  &.active {
    color: #9fc5e8;
  }
`;
