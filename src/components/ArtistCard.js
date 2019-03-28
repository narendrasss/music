import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const Plays = styled.p`
  font-size: 0.9rem;
  text-align: right;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1.5rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 1rem;
  ${Plays} {
    color: ${({ theme }) => theme.colors.gray};
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
    ${Plays} {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

const ArtistCard = ({ user_id, name, num_plays }) => {
  return (
    <Link to={`/artists/${user_id}`}>
      <Card>
        <h1>{name}</h1>
        {num_plays ? (
          <Plays>
            {Number(num_plays).toLocaleString()}
            <br /> Total plays
          </Plays>
        ) : null}
      </Card>
    </Link>
  );
};

export default ArtistCard;
