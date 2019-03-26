import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import styled from 'styled-components';

import client from '../utils/client';
import Container from '../components/Container';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { id } = await client.login(username, password);
      localStorage.setItem('id', id);
      navigate('/home');
    } catch (error) {
      console.error(error);
      setErrors(error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Title>Welcome back.</Title>
        <TextInput
          label="Username"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="text"
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
        {errors ? <ErrorMessage>{errors.error.detail}</ErrorMessage> : null}
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
