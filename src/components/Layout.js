import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const Content = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

export default Layout;
