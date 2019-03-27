import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Nav from './Nav';

const Content = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  margin-left: 20vw;
  padding: 15vh 10vw;
`;

const Layout = ({ children }) => (
  <Container>
    <Nav />
    <Content>{children}</Content>
  </Container>
);

export default Layout;
