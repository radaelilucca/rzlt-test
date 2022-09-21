import * as styled from 'styled-components';

import { lighten } from 'polished';

import { breakpoints } from './breakpoints';

const scrollbarStyles = styled.css`
  ::-webkit-scrollbar {
    width: 0.7rem;
  }
  ::-webkit-scrollbar-button {
    width: 0.7rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.rounded.lg};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => lighten(0.1, theme.colors.accent)};
  }
  ::-webkit-scrollbar-thumb:active {
    background: ${({ theme }) => lighten(0.1, theme.colors.accent)};
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.dark};
    border-radius: ${({ theme }) => theme.rounded.lg};
  }
  ::-webkit-scrollbar-track:hover {
    background: ${({ theme }) => lighten(0.08, theme.colors.dark)};
  }
`;

const GlobalStyles = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ${scrollbarStyles}

    font-family: ${({ theme }) => theme.fontFamily.poppins};

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.highlight};
    }

    @media (max-width: ${breakpoints.tablet}px) {
      font-size: 90%;
    }
  }

  #root {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.lightText};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;
  }
`;

export { GlobalStyles };
