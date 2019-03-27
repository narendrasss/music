import React from 'react';
import styled, { css } from 'styled-components';
import { getInitials } from '../utils/helpers';
import Link from './Link';

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5rem;
  &:hover {
    ${({ theme }) => css`
      color: ${theme.colors.blue};
      ${Icon} {
        background-color: ${theme.colors.blue};
      }
    `}
  }
`;

const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  margin-bottom: 0.8rem;
  background-color: ${({ theme }) => theme.colors.lgray};
  color: ${({ theme }) => theme.colors.white};
`;

const Name = styled.p`
  text-align: center;
`;

const UserIcon = ({ user_id, name }) => {
  return (
    <Wrapper to={`/user/${user_id}`}>
      <Icon>{getInitials(name)}</Icon>
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default UserIcon;
