import React from 'react';
import styled from 'styled-components';
import List from './List';

const MainTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 1rem;
`;

const Name = styled(Title)`
  flex: 3;
`;

const Album = styled(Title)`
  flex: 2;
`;

const Artist = styled(Title)`
  flex: 2;
`;

const Duration = styled(Title)`
  flex: 1;
`;

const SongList = ({ className, title, songs, children }) => {
  return (
    <div className={className}>
      <MainTitle>{title}</MainTitle>
      <Header>
        <Name>Name</Name>
        <Album>Album</Album>
        <Artist>Artist</Artist>
        <Duration>Duration</Duration>
      </Header>
      <List items={songs}>{song => children(song)}</List>
    </div>
  );
};

export default SongList;
