import styled, { css } from 'styled-components';

const Button = styled.button`
  ${({ theme }) => css`
    padding: 1rem;
    border-radius: 0.5rem;
    background: ${theme.colors.blue};
    color: ${theme.colors.white};
    font-size: 0.8rem;
    font-weight: ${theme.fonts.weights.semibold};
    text-transform: uppercase;
  `}
`;

export default Button;
