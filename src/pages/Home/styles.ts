import styled from 'styled-components';

import { darken } from 'polished';

import { breakpoints } from '~/styles';
import { shakeAnimation } from '~/styles/animations';

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

  @media (max-width: ${breakpoints.mobile}px) {
    background: transparent;

    padding: 4rem 2rem;

    height: 100%;
  }
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

  @media (max-width: ${breakpoints.mobile}px) {
    gap: 3.25rem;

    h2 {
      text-align: left;
      font-size: 1.5rem;
      max-width: 80%;
    }
  }
`;

interface InputGroupProps {
  hasError?: boolean;
}

export const InputGroup = styled.div<InputGroupProps>`
  position: relative;

  margin-top: 3rem;

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

    padding: 0 1rem;

    border: 2px solid
      ${({ theme, hasError }) => (hasError ? theme.colors.errorRed : theme.colors.accent)};

    color: ${({ theme, hasError }) => (hasError ? theme.colors.errorRed : theme.colors.lightText)};

    border-radius: ${({ theme }) => theme.rounded.lg};

    min-height: 5rem;

    background-color: ${({ theme }) => theme.colors.cardBackground};

    ${({ hasError }) => hasError && shakeAnimation};
  }

  span {
    position: absolute;
    bottom: -1.8rem;

    right: 0;

    font-size: 1.15rem;

    color: ${({ theme }) => theme.colors.errorRed};
  }

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 6.25rem;
    font-size: 1rem;

    input {
      font-size: 1rem;
      min-height: 3.125rem;
    }

    span {
      bottom: -1.4rem;
      font-size: 0.9rem;
    }
  }
`;
export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.accent};

  cursor: pointer;
  transition: background-color 200ms ease;

  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};

  padding: 1rem;

  color: inherit;

  height: 5rem;

  margin-top: 3rem;

  width: 100%;

  border-radius: ${({ theme }) => theme.rounded.lg};

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.accent)};
  }

  &:disabled {
    background-color: ${({ theme }) => darken(0.3, theme.colors.accent)};
    color: ${({ theme }) => darken(0.3, theme.colors.lightText)};
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 1.25rem;

    padding: 0;
    min-height: 3.125rem;
  }
`;
