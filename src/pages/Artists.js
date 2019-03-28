import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import List from '../components/List';
import client from '../utils/client';
import { sleep } from '../utils/helpers';
import ArtistCard from '../components/ArtistCard';

const Title = styled.h1`
  margin-bottom: 2rem;
`;

const SubTitle = styled.h2`
  margin: 1.5rem 0;
`;

const FlexList = styled(List)`
  display: flex;
`;

class Artists extends Component {
  state = {
    loading: true,
    artists: [],
    favs: []
  };

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <Spinner size="3x" />
        ) : (
          <>
            <Title>Top Artists</Title>
            <List items={this.state.artists}>
              {artist => <ArtistCard {...artist} />}
            </List>
            <SubTitle>Favourite Artists</SubTitle>
            <FlexList items={this.state.favs}>
              {artist => <ArtistCard {...artist} />}
            </FlexList>
          </>
        )}
      </Layout>
    );
  }

  async componentDidMount() {
    await sleep(500);
    client.artist
      .top()
      .then(res => this.setState({ loading: false, artists: res.data }))
      .catch(err => {
        this.setState({ loading: false, errors: err });
      });
    client.artist
      .fav()
      .then(res => this.setState({ loading: false, favs: res.data }))
      .catch(err => {
        this.setState({ loading: false, errors: err });
      });
  }
}

export default Artists;
