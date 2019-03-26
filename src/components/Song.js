import React from 'react';
import { Link as RouterLink } from '@reach/router';
import styled, { css } from 'styled-components';
import { toMinutes } from '../utils/helpers';

const Wrapper = styled.li`
  cursor: pointer;
  display: flex;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  &:hover {
    ${({ theme }) => css`
      border-bottom: 1px solid ${theme.colors.blue};
      color: ${theme.colors.blue};
    `}
  }
`;

const SongName = styled.p`
  flex: 3;
`;

const Name = styled.p`
  flex: 2;
`;

const Time = styled.p`
  flex: 1;
`;

const Link = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
  &:hover {
    font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  }
`;

const Song = ({
  song_id,
  song_name,
  album_name,
  name,
  user_id,
  duration_seconds
}) => (
  <Wrapper>
    <SongName>
      <Link to={`/song/${song_id}`}>{song_name}</Link>
    </SongName>
    <Name>
      <Link to={`/user/${user_id}/${album_name}`}>{album_name}</Link>
    </Name>
    <Name>
      <Link to={`/user/${user_id}`}>{name}</Link>
    </Name>
    <Time>{toMinutes(duration_seconds)}</Time>
  </Wrapper>
);

export default Song;
