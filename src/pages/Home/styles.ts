import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  place-items: center;
`;

export const SearchForm = styled.form`
  background-color: ${({ theme }) => theme.colors.cardDarkerBackground};
  padding: 2.5rem 5.625rem 4rem 5.625rem;

  border-radius: ${({ theme }) => theme.rounded.xl};

  max-width: 45rem;
`;

export const Heading = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    font-weight: ${({ theme }) => theme.fontWeight.xLight};
    font-size: 2rem;

    text-align: center;
  }
`;

export const InputGroup = styled.div`
  margin-top: 48px;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 1.5rem;

  color: ${({ theme }) => theme.colors.lightText};

  label {
    color: inherit;
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }

  input {
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: inherit;

    padding: 0 1rem;

    border: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.rounded.lg};

    min-height: 5rem;

    background-color: ${({ theme }) => theme.colors.cardBackground};
  }
`;
export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};

  cursor: pointer;
  transition: background-color 200ms ease;

  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};

  display: grid;
  place-items: center;
  padding: 20px;

  color: inherit;

  margin-top: 2.5rem;

  width: 100%;

  border-radius: ${({ theme }) => theme.rounded.lg};

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.accent)};
  }

  &:disabled {
    background-color: ${({ theme }) => darken(0.3, theme.colors.accent)};
    color: ${({ theme }) => darken(0.3, theme.colors.lightText)};
  }
`;
