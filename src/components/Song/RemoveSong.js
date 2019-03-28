import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import Song from './Song';

const Wrapper = styled.li`
  position: relative;
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

const Close = styled(FontAwesomeIcon).attrs({ icon: 'times' })`
  position: absolute;
  left: -2rem;
  color: ${({ theme }) => theme.colors.lgray};
`;

const RemoveSong = ({ onRemove, song_id, ...props }) => (
  <Wrapper>
    <Close onClick={() => onRemove(song_id)} />
    <Song song_id={song_id} {...props} />
  </Wrapper>
);

export default RemoveSong;
