import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.blue};
`;

const BackButton = ({ className, size = '1x' }) => (
  <Wrapper className={className} onClick={() => window.history.back()}>
    <FontAwesomeIcon icon="arrow-left" size={size} />
  </Wrapper>
);

export default BackButton;
