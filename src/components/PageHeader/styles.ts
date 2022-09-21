import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { breakpoints } from '~/styles';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const BackButton = styled(Link)`
  position: absolute;
  left: 1.5rem;

  background: none;
  border: none;
  outline: none;

  cursor: pointer;

  svg {
    height: 2.2rem;
    width: 2.2rem;

    opacity: 0.8;

    path {
      transition: fill 200ms ease;
      fill: ${({ theme }) => theme.colors.accent};
    }
  }

  &:hover {
    svg {
      opacity: 1;
      path {
        fill: ${({ theme }) => theme.colors.highlight};
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}px) {
    svg {
      height: 3rem;
      width: 3rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;
