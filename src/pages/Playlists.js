import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import List from '../components/List';
import client from '../utils/client';
import { sleep } from '../utils/helpers';
import Playlist from '../components/Playlist';
import Button from '../components/Button';
import Link from '../components/Link';

const Title = styled.h1`
  margin-bottom: 2rem;
`;

const AddPlaylist = styled(Button)`
  width: 12rem;
  margin: 2rem 0;
`;

class Playlists extends Component {
  state = {
    loading: true,
    playlists: []
  };

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <Spinner size="3x" />
        ) : (
          <>
            <Title>Your Playlists</Title>
            <List items={this.state.playlists}>
              {playlist => <Playlist {...playlist} />}
            </List>
            <Link to="/add-playlist">
              <AddPlaylist>Add playlist</AddPlaylist>
            </Link>
          </>
        )}
      </Layout>
    );
  }

  async componentDidMount() {
    await sleep(500);
    client.playlist
      .me()
      .then(res => this.setState({ loading: false, playlists: res.data }))
      .catch(err => {
        this.setState({ loading: false, errors: err });
      });
  }
}

export default Playlists;
