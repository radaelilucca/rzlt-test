import styled from 'styled-components';

import { darken } from 'polished';

import { breakpoints } from '~/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
`;

export const LoadingIndicator = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  svg {
    height: 15%;
    width: 15%;
  }

  span {
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fontWeight.xLight};
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

export const UserContainer = styled.div`
  margin-bottom: 1.5rem;

  display: flex;
  padding: 1.5rem;
  gap: 1.5rem;

  max-height: calc(8.5rem + (1.5rem * 2));

  width: calc(100% - 2rem);

  border-radius: ${({ theme }) => theme.rounded.xl};
  background-color: ${({ theme }) => theme.colors.cardBackground};

  img {
    height: 8.5rem;
    width: 8.5rem;

    box-shadow: 0.15rem 0.15rem 0.15rem ${({ theme }) => darken(0.05, theme.colors.accent)};

    border-radius: ${({ theme }) => theme.rounded.xl};
  }

  @media (max-width: ${breakpoints.tablet}px) {
    background-color: transparent;
    padding: 0;

    gap: 1.5rem;

    margin: 2rem 0;

    img {
      height: 8rem;
      width: 8rem;
    }
  }
`;

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  p {
    font-weight: ${({ theme }) => theme.fontWeight.xLight};
    font-size: 1.25rem;
    line-height: 2rem;

    overflow: auto;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    overflow: hidden;

    gap: 0.5rem;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export const UserHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 2.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    line-height: 2rem;
    margin-bottom: 0.6rem;
  }

  span {
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fontWeight.xLight};
  }

  @media (max-width: ${breakpoints.tablet}px) {
    strong {
      font-size: 1.8rem;
      line-height: 2rem;
    }
  }
`;

export const ReposContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  flex: 1;

  padding-right: 1rem;

  overflow: hidden;

  & > strong {
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }

  @media (max-width: ${breakpoints.tablet}px) {
    padding: 0;

    & > strong {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const ReposList = styled.ul`
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  padding-bottom: 3rem;
  padding-right: 1rem;

  overflow-y: auto;
`;

export const RepoItem = styled.li`
  flex: 1 1 30%;

  @media (max-width: ${breakpoints.desktop}px) {
    flex: 1 1 40%;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    flex: 1 0 100%;
  }
`;
