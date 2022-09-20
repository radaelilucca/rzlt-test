import { ReactNode } from 'react';

export type UserType = {
  avatar_url: string;
  bio: string;
  location: string;
  username: string;
  name: string;
  repos_url: string;
  public_repos: number;
  searchTimestamp: number;
};

export type RepositoryType = {
  id: string | number;
  name: string;
  description: string;
  watchers_count: number;
  forts_count: number;
  stargazers_count: number;
  html_url: string;
};

export interface IUserContextProviderProps {
  children: ReactNode;
}

export interface IFetchUserProps {
  username: string;
  navigateToProfile?: boolean;
}

export type UserContextValueType = {
  user: UserType | undefined;
  repositories: RepositoryType[] | undefined;
  isLoading: boolean;
  fetchUser: (args: IFetchUserProps) => Promise<void>;
  lastSearch: string;
  searchHistory: UserType[];
  error: Error | null;
  clearError: () => void;
};
