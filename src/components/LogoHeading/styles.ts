import styled from 'styled-components';

import { breakpoints } from '~/styles';

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 1.5rem;

  h1 {
    font-size: 4rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }

  @media (max-width: ${breakpoints.mobile}px) {
    gap: 1.5rem;

    h1 {
      font-size: 2.5rem;
    }

    svg {
      max-width: 3.5rem;
      max-height: 3.5rem;
    }
  }
`;
