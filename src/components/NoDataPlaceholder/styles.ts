import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.errorRed};

    font-weight: ${({ theme }) => theme.fontWeight.light};
  }

  svg {
    max-height: 40%;
    max-width: 40%;

    fill: ${({ theme }) => theme.colors.errorRed};
  }
`;
