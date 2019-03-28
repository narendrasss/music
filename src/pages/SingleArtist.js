import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import List from '../components/List';
import client from '../utils/client';
import { sleep } from '../utils/helpers';
import AddSong from '../components/Song/AddSong';

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Plays = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 2rem;
`;

const Subtitle = styled.h2`
  margin-bottom: 1rem;
`;

const Bio = styled.p`
  margin-bottom: 2rem;
`;

class SingleArtist extends Component {
  state = {
    loading: true,
    name: '',
    bio: '',
    songs: []
  };

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <Spinner size="3x" />
        ) : (
          <>
            <Title>{this.state.name}</Title>
            <Plays>
              {Number(this.state.num_plays).toLocaleString()} total plays
            </Plays>
            <Bio>{this.state.bio}</Bio>
            <Subtitle>Top Songs</Subtitle>
            <List items={this.state.songs}>
              {song => <AddSong {...song} />}
            </List>
          </>
        )}
      </Layout>
    );
  }

  async componentDidMount() {
    await sleep(500);
    client.artist
      .one(this.props.id)
      .then(res => this.setState({ loading: false, ...res.data }))
      .catch(err => {
        this.setState({ loading: false, errors: err });
      });
    client.song
      .by(this.props.id)
      .then(res => this.setState({ loading: false, songs: res.data }))
      .catch(err => {
        this.setState({ loading: false, errors: err });
      });
  }
}

export default SingleArtist;
