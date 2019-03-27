import React, { useState } from 'react';
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

const Open = styled(FontAwesomeIcon)`
  position: absolute;
  left: -2rem;
  color: ${({ theme }) => theme.colors.lgray};
`;

const AddSong = ({ onAdd, song_id, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Open
        onClick={() => {
          setOpen(!open);
          onAdd(song_id);
        }}
        icon={open ? 'check' : 'plus'}
      />
      <Song song_id={song_id} {...props} />
    </Wrapper>
  );
};

export default AddSong;
