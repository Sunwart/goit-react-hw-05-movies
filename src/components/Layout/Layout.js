import { Outlet } from 'react-router-dom';
import { MenuContainer, MenuList, MenuLink } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <MenuContainer>
        <MenuList>
          <li>
            <MenuLink to="/">Home</MenuLink>
          </li>
          <li>
            <MenuLink to="/movies">Movies</MenuLink>
          </li>
        </MenuList>
      </MenuContainer>
      <Outlet />
    </>
  );
}
