import styled from 'styled-components';

import { breakpoints } from '~/styles';

export const Container = styled.main`
  height: 100%;

  width: 100%;
  max-width: ${breakpoints.desktop}px;

  @media (max-width: ${breakpoints.desktop}px) {
    padding: 0 2rem;
  }
`;
