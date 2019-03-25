import React, { useState } from 'react';
import styled from 'styled-components';

import client from '../utils/client';
import Container from '../components/Container';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import RadioInput from '../components/RadioInput';
import { navigate } from '@reach/router/lib/history';

const Form = styled.form`
  width: 20rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Submit = styled(Button).attrs({ type: 'submit' })`
  width: 100%;
`;

const Radio = styled(RadioInput)`
  margin-bottom: 1.5rem;
`;

const Back = styled(BackButton)`
  margin-bottom: 1.5rem;
`;

const ErrorMessage = styled.p`
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: white;
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.red};
`;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('user');
  const [errors, setErrors] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    client
      .register(email, password, name, type)
      .then(() => navigate('/'))
      .catch(err => setErrors(err));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Back size="2x" />
        <Title>Register</Title>
        <TextInput
          label="Full Name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          required
        />
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
        <Radio
          options={['User', 'Artist']}
          name="type"
          onChange={e => setType(e.target.value)}
        />
        {errors ? <ErrorMessage>{errors.error.detail}</ErrorMessage> : null}
        <Submit>Register</Submit>
      </Form>
    </Container>
  );
};

export default Register;
