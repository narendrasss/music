import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import client from '../utils/client';
import SongList from '../components/SongList';
import List from '../components/List';
import Playlist from '../components/Playlist';
import UserIcon from '../components/UserIcon';

const Songs = styled(SongList)`
  margin: 2rem 0;
`;

const FlexList = styled(List)`
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

class Home extends Component {
  state = {
    loading: true,
    user: {},
    songs: [],
    playlists: [],
    follows: []
  };

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <Spinner size="3x" />
        ) : (
          <>
            <h1>Welcome back, {this.state.user.name}.</h1>
            <Songs title="Liked Songs" songs={this.state.songs} />
            <h2>Playlists</h2>
            <FlexList items={this.state.playlists}>
              {playlist => <Playlist {...playlist} />}
            </FlexList>
            <h2>Follows</h2>
            <FlexList items={this.state.follows}>
              {user => <UserIcon {...user} />}
            </FlexList>
          </>
        )}
      </Layout>
    );
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      client.user
        .me()
        .then(res => {
          const {
            self: user,
            likedSongs: songs,
            playlists,
            follows
          } = res.data;
          this.setState({ loading: false, user, songs, playlists, follows });
        })
        .catch(err => {
          this.setState({ loading: false, errors: err });
        });
    });
  }
}

export default Home;
