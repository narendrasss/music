import React from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './global';
import theme from './theme';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AddPlaylist from './pages/AddPlaylist';
import Songs from './pages/Songs';
import Playlist from './pages/Playlists';
import Artists from './pages/Artists';
import Albums from './pages/Albums';

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Router>
        <Login path="/" />
        <Register path="/register" />
        <Home path="/home" />
        <AddPlaylist path="/add-playlist" />
        <Songs path="/songs" />
        <Playlist path="/playlists" />
        <Artists path="/artists" />
        <Albums path="/albums" />
      </Router>
    </>
  </ThemeProvider>
);

export default App;
