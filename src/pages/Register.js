import React, { useState } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';

import client from '../utils/client';
import { makeID } from '../utils/helpers';
import Container from '../components/Container';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import RadioInput from '../components/RadioInput';
import ErrorMessage from '../components/ErrorMessage';

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

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('user');
  const [errors, setErrors] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const id = makeID();
    try {
      const { uid } = await client.register(
        id,
        username,
        password,
        name,
        type.toLowerCase()
      );
      localStorage.setItem('id', uid);
      navigate('/home');
    } catch (err) {
      console.error(err);
      setErrors(err);
    }
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
          label="Username"
          name="email"
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
