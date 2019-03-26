import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinny = styled(FontAwesomeIcon).attrs({ icon: 'circle-notch' })`
  color: ${({ theme }) => theme.colors.lgray};
  animation: ${spin} 1s ease-in-out infinite;
  margin: auto;
`;

const Spinner = ({ className, size = '1x' }) => {
  return <Spinny className={className} size={size} />;
};

export default Spinner;
