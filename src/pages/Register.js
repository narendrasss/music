import React, { useState } from 'react';
import styled from 'styled-components';
import client from '../utils/client';
import Container from '../components/Container';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import RadioInput from '../components/RadioInput';

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

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('user');

  return (
    <Container>
      <Form
        onSubmit={e => {
          e.preventDefault();
          client.register(email, password, name, type);
        }}
      >
        <Title>Register</Title>
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
        <TextInput
          label="Full Name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          required
        />
        <Radio
          options={['User', 'Artist']}
          name="type"
          onChange={e => setType(e.target.value)}
        />
        <Submit>Register</Submit>
      </Form>
    </Container>
  );
};

export default Register;
