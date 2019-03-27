import React, { Component } from 'react';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import List from '../components/List';
import Song from '../components/Song';
import client from '../utils/client';

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
            <h1>Top Songs</h1>
            <List items={this.state.songs}>{song => <Song {...song} />}</List>
          </>
        )}
      </Layout>
    );
  }

  componentDidMount() {
    client.song
      .top()
      .then(res => this.setState({ loading: false, songs: res.data }))
      .catch(err => {
        this.setState({ loading: false, errors: err });
      });
  }
}

export default Songs;
