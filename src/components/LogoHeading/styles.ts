import styled from 'styled-components';

import { breakpoints } from '~/styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;

  gap: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }

  svg {
    max-width: 4.5rem;
    max-height: 4.5rem;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    gap: 1.5rem;

    h1 {
      font-size: 2.5rem;
    }

    svg {
      max-width: 2.5rem;
      max-height: 2.5rem;
    }
  }
`;
