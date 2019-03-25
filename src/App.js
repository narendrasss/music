import React from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './global';
import theme from './theme';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Router>
        <Login path="/" />
        <Register path="/register" />
      </Router>
    </>
  </ThemeProvider>
);

export default App;
