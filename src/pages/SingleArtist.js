import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import List from '../components/List';
import client from '../utils/client';
import { sleep } from '../utils/helpers';
import LikedSong from '../components/Song/LikedSong';
import Button from '../components/Button';

const Header = styled.header`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Btn = styled(Button)`
  width: 8rem;
  ${({ followed, theme }) =>
    followed
      ? css`
          background: ${theme.colors.white};
          border: 1px solid ${theme.colors.blue};
          color: ${theme.colors.blue};
        `
      : null}
`;

const Title = styled.h1`
  margin-right: 2rem;
`;

const Plays = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 2rem;
`;

const Subtitle = styled.h2`
  margin-bottom: 1rem;
`;

const Bio = styled.p`
  margin-bottom: 2rem;
`;

class SingleArtist extends Component {
  state = {
    loading: true,
    name: '',
    bio: '',
    songs: [],
    followed: false
  };

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <Spinner size="3x" />
        ) : (
          <>
            <Header>
              <Title>{this.state.name}</Title>
              <Btn
                followed={this.state.followed}
                onClick={this.handleToggleFollow}
              >
                {this.state.followed ? 'Unfollow' : 'Follow'}
              </Btn>
            </Header>
            <Plays>
              {Number(this.state.num_plays).toLocaleString()} total plays
            </Plays>
            <Bio>{this.state.bio}</Bio>
            <Subtitle>Top Songs</Subtitle>
            <List items={this.state.songs}>
              {song => <LikedSong onChange={this.toggleLike} {...song} />}
            </List>
          </>
        )}
      </Layout>
    );
  }

  async componentDidMount() {
    await sleep(500);
    client.artist
      .one(this.props.id)
      .then(res => this.setState({ loading: false, ...res.data }))
      .catch(err => {
        this.setState({ loading: false, errors: err });
      });
    client.song
      .by(this.props.id)
      .then(res => this.setState({ loading: false, songs: res.data }))
      .catch(err => {
        this.setState({ loading: false, errors: err });
      });
    client.artist
      .followed(this.props.id)
      .then(res => this.setState({ loading: false, followed: res.follows }))
      .catch(err => {
        this.setState({ loading: false, errors: err });
      });
  }

  handleToggleFollow = () => {
    const followed = !this.state.followed;
    this.setState({ followed });
    if (followed) {
      client.user
        .follow(this.props.id)
        .catch(err => this.setState({ errors: err }));
    } else {
      client.user
        .unfollow(this.props.id)
        .catch(err => this.setState({ errors: err }));
    }
  };

  toggleLike = (id, liked) => {
    if (liked) {
      client.song.like(id).catch(err => console.error(err));
    } else {
      client.song.unlike(id).catch(err => console.error(err));
    }
  };
}

export default SingleArtist;
