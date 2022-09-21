import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { breakpoints } from '~/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  height: 100%;
  width: 100%;
  gap: 2.75rem;

  padding-bottom: 2rem;

  overflow: hidden;
`;

export const HistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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

  position: relative;

  min-height: 140px;

  background-color: ${({ theme }) => theme.colors.cardBackground};

  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.rounded.lg};

  display: flex;
  overflow: hidden;
  gap: 1rem;

  img {
    height: 140px;
    width: 140px;
    object-fit: cover;
  }

  cursor: pointer;

  transition: background-color 200ms ease;

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
    height: 120px;
    min-height: 120px;

    img {
      height: 120px;
    }

    .arrow-svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  @media (max-width: ${breakpoints.tablet}px) {
    height: 100px;
    min-height: 100px;

    img {
      height: 100px;
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
    .username,
    .location {
      display: none;
    }

    .search-date {
      margin: 0;
    }
  }
`;

export const HistoryItemHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  strong {
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  @media (max-width: ${breakpoints.tablet}px) {
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
