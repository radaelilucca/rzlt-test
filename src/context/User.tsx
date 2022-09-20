import { createContext, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { githubApi } from '~/services';

import { IFetchUserProps, RepositoryType, UserType } from './User.types';
import { IUserContextProviderProps, UserContextValueType } from './User.types';

const LOCAL_STORAGE_HISTORY_KEY = '@github-finder-search-history';

const userContext = createContext({} as UserContextValueType);

const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  const [user, setUser] = useState<UserType | undefined>();
  const [isLoading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState<RepositoryType[] | undefined>([]);
  const [lastSearch, setLastSearch] = useState('');
  const [error, setError] = useState<Error | null>(null);

  const persistedSearchHistory = localStorage.getItem(LOCAL_STORAGE_HISTORY_KEY);

  const searchHistoryInitialValue = persistedSearchHistory
    ? JSON.parse(persistedSearchHistory)
    : [];

  const [searchHistory, setSearchHistory] = useState<UserType[]>(searchHistoryInitialValue);

  const navigate = useNavigate();

  const clearError = () => setError(null);

  const handleUpdateSearchHistory = useCallback(() => {
    if (!user) return;

    setSearchHistory((prevHistory) => {
      const filteredHistory = prevHistory.filter((userItem) => userItem.username !== user.username);
      filteredHistory.push(user);

      filteredHistory.sort(
        (histItemA, histItemB) => histItemB.searchTimestamp - histItemA.searchTimestamp,
      );

      localStorage.setItem(LOCAL_STORAGE_HISTORY_KEY, JSON.stringify(filteredHistory));

      return filteredHistory;
    });
  }, [user]);

  const fetchUser = async ({ username, navigateToProfile }: IFetchUserProps) => {
    try {
      setLoading(true);
      const response = await githubApi.get(`/users/${username}`);
      const { avatar_url, bio, location, name, repos_url, public_repos } =
        response.data as UserType;

      const parsedUser: UserType = {
        avatar_url,
        bio,
        location,
        name,
        repos_url,
        public_repos,
        username,
        searchTimestamp: Date.now(),
      };

      const repositoriesResponse = await githubApi.get(`/users/${username}/repos`);
      const repositories = repositoriesResponse.data as RepositoryType[];

      const parsedRepositories = repositories.map(
        ({ id, name, description, forts_count, watchers_count, stargazers_count, html_url }) => ({
          id,
          name,
          description,
          forts_count,
          watchers_count,
          stargazers_count,
          html_url,
        }),
      );

      setUser(parsedUser);
      setRepositories(parsedRepositories);
      setLastSearch(username);

      clearError();

      if (navigateToProfile) navigate(`/users/${username}`);
    } catch (error) {
      setError(error as Error);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      handleUpdateSearchHistory();
    }
  }, [user, handleUpdateSearchHistory]);

  const value: UserContextValueType = {
    user,
    repositories,
    isLoading,
    fetchUser,
    lastSearch,
    error,
    clearError,
    searchHistory,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export { userContext, UserContextProvider };
