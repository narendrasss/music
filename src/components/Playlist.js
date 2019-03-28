import React from 'react';
import styled, { css } from 'styled-components';
import Link from './Link';

const Wrapper = styled.li`
  ${({ theme: { colors } }) => css`
    margin-right: 2rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid ${colors.white};
    p {
      color: ${colors.gray};
    }
    &:hover {
      color: ${colors.blue};
      border-bottom: 1px solid ${colors.blue};
      p {
        color: ${colors.blue};
      }
    }
  `}
`;

const PlaylistName = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const Playlist = ({ playlist_name, num_songs }) => (
  <Wrapper>
    <Link to={`/playlists/${playlist_name}`}>
      <PlaylistName>{playlist_name}</PlaylistName>
      <p>Number of songs: {num_songs}</p>
    </Link>
  </Wrapper>
);

export default Playlist;
