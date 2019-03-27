import React from 'react';
import styled from 'styled-components';
import List from './List';
import Song from './Song';

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

const SongList = ({ className, title, songs, onRemove }) => {
  return (
    <div className={className}>
      <MainTitle>{title}</MainTitle>
      <Header>
        <Name>Name</Name>
        <Album>Album</Album>
        <Artist>Artist</Artist>
        <Duration>Duration</Duration>
      </Header>
      <List items={songs}>
        {song => <Song onRemove={onRemove} {...song} />}
      </List>
    </div>
  );
};

export default SongList;
