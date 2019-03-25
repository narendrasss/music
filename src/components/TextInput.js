import React from 'react';
import styled from 'styled-components';

const Label = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray};
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.lgray};
  border-radius: 5px;
  font-size: 13px;
  font-family: inherit;
  color: inherit;
  margin-top: 0.8rem;
  -webkit-appearance: none;
  margin-bottom: 1.5rem;
  &:focus {
    border: 3px solid $secondary;
    outline: none;
    color: inherit;
  }
`;

const TextInput = ({ label, name, value, onChange, ...props }) => (
  <label htmlFor={name}>
    <Label>{label}</Label>
    <Input
      name={name}
      value={value}
      onChange={e => {
        e.preventDefault();
        onChange(e);
      }}
      {...props}
    />
  </label>
);

export default TextInput;
