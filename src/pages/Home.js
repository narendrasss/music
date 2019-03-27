import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import client from '../utils/client';
import SongList from '../components/SongList';
import List from '../components/List';
import Playlist from '../components/Playlist';
import UserIcon from '../components/UserIcon';
import Button from '../components/Button';
import Link from '../components/Link';
import RemoveSong from '../components/Song/RemoveSong';
import { sleep } from '../utils/helpers';

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

const AddPlaylist = styled(Button)`
  width: 12rem;
  margin-bottom: 2rem;
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
            <Songs title="Liked Songs" songs={this.state.songs}>
              {song => (
                <RemoveSong onRemove={this.handleRemoveSong} {...song} />
              )}
            </Songs>
            <h2>Playlists</h2>
            <FlexList items={this.state.playlists}>
              {playlist => <Playlist {...playlist} />}
            </FlexList>
            <Link to="/add-playlist">
              <AddPlaylist>Add playlist</AddPlaylist>
            </Link>
            <h2>Follows</h2>
            <FlexList items={this.state.follows}>
              {user => <UserIcon {...user} />}
            </FlexList>
          </>
        )}
      </Layout>
    );
  }

  async componentDidMount() {
    await sleep(800);
    client.user
      .me()
      .then(res => {
        const { self: user, likedSongs: songs, playlists, follows } = res.data;
        this.setState({ loading: false, user, songs, playlists, follows });
      })
      .catch(err => {
        this.setState({ loading: false, errors: err });
      });
  }

  handleRemoveSong = id => {
    this.setState({ loading: true }, () => {
      const index = this.state.songs.findIndex(({ song_id }) => song_id === id);
      const songs = this.state.songs;
      songs.splice(index, 1);
      client.song
        .unlike(id)
        .then(() => {
          this.setState({
            loading: false,
            songs
          });
        })
        .catch(err => {
          this.setState({ loading: false, errors: err });
        });
    });
  };
}

export default Home;
