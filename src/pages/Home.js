import React, { Component } from 'react';
import Container from '../components/Container';
import Spinner from '../components/Spinner';
import client from '../utils/client';

class Home extends Component {
  state = {
    loading: false,
    user: {},
    songs: [],
    playlists: []
  };

  render() {
    return (
      <Container>
        {this.state.loading ? (
          <Spinner size="3x" />
        ) : (
          <>
            <h1>Welcome back, {this.state.user.name}.</h1>
            <h2>Songs</h2>
            {this.state.songs.map(song => (
              <p>{song.song_name}</p>
            ))}
            <h2>Playlists</h2>
            {this.state.playlists.map(playlist => (
              <p>{playlist.playlist_name}</p>
            ))}
          </>
        )}
      </Container>
    );
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      client.user
        .me()
        .then(res => {
          const { self: user, likedSongs: songs, playlists } = res.data;
          this.setState({ loading: false, user, songs, playlists });
        })
        .catch(err => {
          this.setState({ loading: false, errors: err });
        });
    });
  }
}

export default Home;
