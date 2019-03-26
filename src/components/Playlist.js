import React from 'react';
import styled, { css } from 'styled-components';
import Link from './Link';

const Wrapper = styled.li`
  ${({ theme: { colors } }) => css`
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

const Playlist = ({ user_id, playlist_name, no_of_songs }) => (
  <Wrapper>
    <Link to={`/user/${user_id}/playlist/${playlist_name}`}>
      <PlaylistName>{playlist_name}</PlaylistName>
      <p>Number of songs: {no_of_songs}</p>
    </Link>
  </Wrapper>
);

export default Playlist;
