import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import { logout } from '../utils/helpers';

const Wrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 20vw;
  border-right: 1px solid ${({ theme }) => theme.colors.lgray};
  display: flex;
`;

const NavContainer = styled.ul`
  list-style: none;
  margin: auto;
  color: ${({ theme }) => theme.colors.gray};
`;

const NavItem = styled.li`
  margin-bottom: 1rem;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const Logout = styled(NavItem)`
  cursor: pointer;
`;

const Nav = () => {
  return (
    <Wrapper>
      <NavContainer>
        <NavItem>
          <Link to="/home">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/home">Songs</Link>
        </NavItem>
        <NavItem>
          <Link to="/home">Playlists</Link>
        </NavItem>
        <NavItem>
          <Link to="/home">Albums</Link>
        </NavItem>
        <NavItem>
          <Link to="/home">Artists</Link>
        </NavItem>
        <Logout onClick={logout}>Logout</Logout>
      </NavContainer>
    </Wrapper>
  );
};

export default Nav;
