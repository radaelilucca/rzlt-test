import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 1.5rem;

  h1 {
    font-size: 4rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }
`;