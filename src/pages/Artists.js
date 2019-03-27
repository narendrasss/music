import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import List from '../components/List';
import client from '../utils/client';
import { sleep } from '../utils/helpers';
import Playlist from '../components/Playlist';
import Link from '../components/Link';

const Title = styled.h1`
  margin-bottom: 2rem;
`;

class Artists extends Component {
  state = {
    loading: true,
    artists: []
  };

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <Spinner size="3x" />
        ) : (
          <>
            <Title>Your Playlists</Title>
            <List items={this.state.artists}>
              {playlist => <Playlist {...playlist} />}
            </List>
          </>
        )}
      </Layout>
    );
  }

  async componentDidMount() {
    await sleep(500);
    client.playlist
      .me()
      .then(res => this.setState({ loading: false, artists: res.data }))
      .catch(err => {
        this.setState({ loading: false, errors: err });
      });
  }
}

export default Artists;
