import * as styled from 'styled-components';

const GlobalStyles = styled.createGlobalStyle`
  #root {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.lightText};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;

    * {
      font-family: ${({ theme }) => theme.fontFamily.poppins};

      &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.highlight};
      }
    }
  }
`;

export { GlobalStyles };
