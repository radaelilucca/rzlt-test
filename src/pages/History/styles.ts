import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { darken } from 'polished';

import { breakpoints } from '~/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  height: 100%;
  width: 100%;

  padding-bottom: 2rem;

  overflow: hidden;
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0.5rem 1rem;

  cursor: pointer;

  margin-top: 1rem;

  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.lightText};

  border-radius: ${({ theme }) => theme.rounded.lg};
  border: none;

  background-color: ${({ theme }) => theme.colors.accent};
  transition: background-color 200ms ease;

  svg {
    height: 1.5rem;
    width: 1.5rem;

    path {
      transition: fill 200ms ease;

      fill: ${({ theme }) => theme.colors.lightText};
    }
  }

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.accent)};

    svg {
      path {
        fill: ${({ theme }) => theme.colors.errorRed};
      }
    }
  }
`;

export const HistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  height: 100%;

  overflow-y: auto;

  padding-right: 1rem;

  width: 50%;

  @media (max-width: ${breakpoints.desktop}px) {
    width: 80%;
  }
  @media (max-width: ${breakpoints.tablet}px) {
    width: 100%;
  }
`;

export const HistoryItem = styled(Link)`
  all: unset;

  cursor: pointer;

  position: relative;

  min-height: 8rem;

  background-color: ${({ theme }) => theme.colors.cardBackground};

  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.rounded.lg};

  display: flex;
  gap: 1rem;

  overflow: hidden;

  transition: background-color 200ms ease;

  img {
    height: 8rem;
    width: 8rem;
    object-fit: cover;
  }

  &:hover,
  &:focus {
    &:after {
      opacity: 1;
    }
  }

  &:after {
    content: 'Search again';
    font-size: 1.4rem;
    font-weight: ${({ theme }) => theme.fontWeight.xLight};

    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.accent};
    text-underline-offset: 0.5rem;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.cardDarkerBackground};

    opacity: 0;

    transition: opacity 300ms ease;
  }

  .arrow-svg {
    height: 2rem;
    width: 2rem;

    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;

    path {
      fill: ${({ theme }) => theme.colors.highlight};
    }
  }

  @media (max-width: ${breakpoints.tablet}px) {
    height: 7.5rem;
    min-height: 7.5rem;

    img {
      height: 7.5rem;
    }

    .arrow-svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  @media (max-width: ${breakpoints.tablet}px) {
    height: 6.25rem;
    min-height: 6.25rem;

    img {
      height: 6.25rem;
    }

    .arrow-svg {
      height: 1rem;
      width: 1rem;
    }
  }
`;

export const HistoryItemData = styled.div`
  width: 100%;

  padding: 0 1rem 0.5rem 0;

  display: flex;
  flex-direction: column;

  span {
    font-weight: ${({ theme }) => theme.fontWeight.xLight};
  }

  .search-date {
    margin-top: auto;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    .username {
      display: none;
    }
  }
`;

export const HistoryItemHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }

  @media (max-width: ${breakpoints.tablet}px) {
    strong {
      font-size: 1rem;
    }

    span {
      font-size: 0.9rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}px) {
    flex-direction: column;
    align-items: flex-start;

    strong {
      font-size: 1rem;
    }

    span {
      font-size: 0.9rem;
    }
  }
`;
