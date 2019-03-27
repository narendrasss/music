import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import client from '../utils/client';
import AddSong from '../components/Song/AddSong';
import SongList from '../components/SongList';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { navigate } from '@reach/router/lib/history';

const AddPlaylistButton = styled(Button)`
  width: 12rem;
  margin-top: 1rem;
`;

const Songs = styled(SongList)`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
`;

class AddPlaylist extends Component {
  state = {
    loading: true,
    name: '',
    options: [],
    songs: []
  };

  render() {
    return (
      <Layout>
        {this.state.loading ? null : (
          <>
            <Title>Add Playlist</Title>
            <TextInput
              label="Playlist name"
              name="name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <Songs title="Liked Songs" songs={this.state.options}>
              {song => <AddSong onAdd={this.handleChangeSong} {...song} />}
            </Songs>
            <AddPlaylistButton>Add playlist</AddPlaylistButton>
          </>
        )}
      </Layout>
    );
  }

  componentDidMount() {
    client.song
      .liked()
      .then(res => this.setState({ loading: false, options: res.data }))
      .catch(err => {
        this.setState({ loading: false, errors: err });
      });
  }

  handleChangeSong = id => {
    const { songs } = this.state;
    if (songs.includes(id)) {
      songs.splice(songs.indexOf(id), 1);
      this.setState({ songs });
    } else {
      songs.push(id);
      this.setState({ songs });
    }
  };

  handleSubmit = () => {
    const { name, songs } = this.state;
    this.setState({ loading: true }, () => {
      client.playlist
        .create(name, ...songs)
        .then(() => {
          this.setState({ loading: false }, () => navigate('/home'));
        })
        .catch(err =>
          this.setState({ loading: false }, () => console.error(err))
        );
    });
  };
}

export default AddPlaylist;
