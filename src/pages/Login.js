import React, { useState } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

import client from '../utils/client';
import Container from '../components/Container';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Submit = styled(Button).attrs({ type: 'submit' })`
  margin-right: 1rem;
  flex: 1;
`;

const Register = styled(Link).attrs({ to: '/register' })`
  flex: 1;

  ${Button} {
    color: ${({ theme }) => theme.colors.blue};
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <form
        onSubmit={e => {
          e.preventDefault();
          client.login(email, password);
        }}
      >
        <Title>Welcome back.</Title>
        <TextInput
          label="Email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          required
        />
        <TextInput
          label="Password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          required
        />
        <ButtonsWrapper>
          <Submit>Login</Submit>
          <Register to="/register">
            <Button>Register</Button>
          </Register>
        </ButtonsWrapper>
      </form>
    </Container>
  );
};

export default Login;
