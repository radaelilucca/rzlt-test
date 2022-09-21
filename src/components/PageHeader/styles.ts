import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding-top: 3rem;
`;

export const BackButton = styled.button`
  position: absolute;
  left: 1.5rem;

  background: none;
  border: none;
  outline: none;

  cursor: pointer;

  svg {
    height: 4rem;
    width: 4rem;

    path {
      transition: fill 200ms ease;
      fill: ${({ theme }) => theme.colors.accent};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.highlight};
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
