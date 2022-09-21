import styled from 'styled-components';

import { darken } from 'polished';

import { breakpoints } from '~/styles';

export const Container = styled.a`
  all: unset;

  position: relative;

  height: 9rem;

  background-color: ${({ theme }) => theme.colors.cardBackground};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  border-radius: ${({ theme }) => theme.rounded.md};
  border: 2px solid ${({ theme }) => theme.colors.accent};

  cursor: pointer;

  transition: background-color 200ms ease;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => darken(0.15, theme.colors.accent)};

    & > .click-indicator {
      opacity: 1;
    }
  }
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  max-height: 2rem;
  overflow: hidden;

  & > strong {
    font-size: 1.4rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};

    max-width: 80%;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    & > strong {
      font-size: 1.5rem;
      max-width: 70%;
    }
  }

  @media (max-width: ${breakpoints.mobile}px) {
    & > strong {
      font-size: 1.2rem;
    }
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.lightText};

    svg {
      height: 1.5rem;
      width: 1.5rem;

      path {
        fill: ${({ theme }) => theme.colors.lightText};
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}px) {
    span {
      font-size: 1rem;
    }
  }
`;

export const Description = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: 1.2rem;

  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 1rem;
  }
`;

export const ClickIndicator = styled.div`
  position: absolute;

  bottom: 0;
  right: 0.5rem;

  opacity: 0;

  transition: opacity 200ms ease;

  svg {
    height: 1.5rem;
    width: 1.5rem;

    path {
      fill: ${({ theme }) => theme.colors.lightText};
    }
  }
`;
