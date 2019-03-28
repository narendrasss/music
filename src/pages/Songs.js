import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import List from '../components/List';
import LikedSong from '../components/Song/LikedSong';
import client from '../utils/client';
import { sleep } from '../utils/helpers';

const Title = styled.h1`
  margin-bottom: 2rem;
`;

class Songs extends Component {
  state = {
    loading: true,
    songs: []
  };

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <Spinner size="3x" />
        ) : (
          <>
            <Title>Top Songs</Title>
            <List items={this.state.songs}>
              {song => <LikedSong onChange={this.toggleLike} {...song} />}
            </List>
          </>
        )}
      </Layout>
    );
  }

  async componentDidMount() {
    await sleep(500);
    client.song
      .top()
      .then(res => this.setState({ loading: false, songs: res.data }))
      .catch(err => {
        this.setState({ loading: false, errors: err });
      });
  }

  toggleLike = (id, liked) => {
    if (liked) {
      client.song.like(id).catch(err => console.error(err));
    } else {
      client.song.unlike(id).catch(err => console.error(err));
    }
  };
}

export default Songs;
