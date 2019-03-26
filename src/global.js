import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`
    body {
      font-family: ${theme.fonts.body};
      fon-size: ${theme.fonts.baseSize};
      color: ${theme.colors.black};
    }

    h1,
    h2,
    h3 {
      font-family: ${theme.fonts.heading};
      font-weight: ${theme.fonts.weights.bold};
    }

    h1 {
      line-height: 1;
    }

    code {
      font-family: ${theme.fonts.mono};
      font-size: 0.8rem;
    }
  `}
`;
