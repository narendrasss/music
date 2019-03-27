import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import List from '../components/List';
import AddSong from '../components/Song/AddSong';
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
              {song => <AddSong onAdd={this.handleChangeSong} {...song} />}
            </List>
          </>
        )}
      </Layout>
    );
  }

  async componentDidMount() {
    await sleep(800);
    client.song
      .top()
      .then(res => this.setState({ loading: false, songs: res.data }))
      .catch(err => {
        this.setState({ loading: false, errors: err });
      });
  }

  handleChangeSong = id => {
    this.setState({ loading: true }, () => {
      client.song
        .like(id)
        .then(() => {
          this.setState({ loading: false });
        })
        .catch(err => {
          this.setState({ loading: false }, () => {
            console.error(err);
          });
        });
    });
  };
}

export default Songs;
