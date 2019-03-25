import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
`;

const Radio = styled.input.attrs({ type: 'radio' })`
  margin-right: 1rem;
  &:checked + label {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const RadioInput = ({ className, options, name, onChange }) => (
  <div className={className} onChange={onChange}>
    {options.map((option, idx) => (
      <Wrapper key={option} htmlFor={option}>
        <Radio value={option} name={name} />
        {option}
      </Wrapper>
    ))}
  </div>
);

export default RadioInput;
