import React, { Component } from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import List from '../components/List';
import client from '../utils/client';
import { sleep } from '../utils/helpers';
import RemoveSong from '../components/Song/RemoveSong';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

const Title = styled.h1`
  margin-bottom: 2rem;
`;

const Btn = styled(Button)`
  width: 12rem;
  margin: 1rem 0;
`;

const Warning = styled(Btn)`
  background-color: ${({ theme }) => theme.colors.red};
`;

const Hidden = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const Flex = styled.div`
  display: flex;
  ${Btn} {
    margin-right: 1rem;
  }
`;

class SinglePlaylist extends Component {
  state = {
    loading: true,
    songs: [],
    editing: false,
    name: this.props.name,
    isPrivate: false
  };

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <Spinner size="3x" />
        ) : (
          <>
            <Title>{this.state.name}</Title>
            <List items={this.state.songs}>
              {playlist => <RemoveSong {...playlist} />}
            </List>
            <Flex>
              <Btn onClick={this.handleShow}>
                {this.state.editing ? 'Close' : 'Edit Playlist'}
              </Btn>
              <Warning onClick={this.handleDelete}>Delete playlist</Warning>
            </Flex>
            <Hidden show={this.state.editing}>
              <TextInput
                label="New playlist name"
                name="name"
                value={this.state.name}
                onChange={this.handleTextChange}
              />
              <Btn onClick={this.handleUpdate}>Update Playlist</Btn>
            </Hidden>
          </>
        )}
      </Layout>
    );
  }

  async componentDidMount() {
    await sleep(500);
    this.fetchSongs();
  }

  handleShow = () => {
    const editing = this.state.editing;
    this.setState({ editing: !editing });
  };

  handleTextChange = e => {
    this.setState({ name: e.target.value });
  };

  handleUpdate = () => {
    const { name, isPrivate } = this.state;
    this.setState({ loading: true }, () => {
      client.playlist
        .update(this.props.name, { name, isPrivate })
        .then(() => {
          this.setState({ loading: false, editing: false });
          navigate(`/playlists/${name}`);
        })
        .catch(err => {
          this.setState({ loading: false, errors: err });
        });
    });
  };

  handleDelete = () => {
    this.setState({ loading: true }, () => {
      client.playlist
        .delete(this.props.name)
        .then(() => {
          this.setState({ loading: false });
          navigate(`/playlists`);
        })
        .catch(err => {
          this.setState({ loading: false, errors: err });
        });
    });
  };

  fetchSongs = async () => {
    this.setState({ loading: true }, () => {
      client.playlist
        .one(this.props.name)
        .then(res => this.setState({ loading: false, songs: res.data }))
        .catch(err => {
          this.setState({ loading: false, errors: err });
        });
    });
  };
}

export default SinglePlaylist;
