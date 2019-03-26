import styled from 'styled-components';

const ErrorMessage = styled.p`
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: white;
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.red};
`;

export default ErrorMessage;
