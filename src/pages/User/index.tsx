import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { LoadingIcon } from '~/assets/svg';

import { NoDataPlaceholder, RepoCard, PageHeader } from '~/components';
import { userContext } from '~/context';
import { useMountEffect } from '~/hooks';

import {
  Container,
  LoadingIndicator,
  RepoItem,
  ReposContainer,
  ReposList,
  UserContainer,
  UserDataContainer,
  UserHeadingContainer,
} from './styles';

const UserDetailsPage = () => {
  const { user, repositories, isLoading, error, fetchUser } = useContext(userContext);

  const location = useLocation();

  useMountEffect(() => {
    const paths = location.pathname.split('/');
    const username = paths.pop() as string;

    if (user?.username !== username) fetchUser({ username, navigateToProfile: false });
  });

  if (error) return <NoDataPlaceholder message='User not found' />;

  if (isLoading)
    return (
      <LoadingIndicator>
        <LoadingIcon />
        <span>Loading user profile...</span>
      </LoadingIndicator>
    );

  return (
    <Container>
      <PageHeader title={user?.username} />

      <UserContainer>
        <img src={user?.avatar_url} alt={user?.name} />
        <UserDataContainer>
          <UserHeadingContainer>
            <strong>{user?.name}</strong>
            <span>{user?.location}</span>
          </UserHeadingContainer>
          <p>{user?.bio}</p>
        </UserDataContainer>
      </UserContainer>

      <ReposContainer>
        <strong>
          <span>public repositories:</span> <span>{repositories?.length}</span>
        </strong>

        {!repositories?.length && <NoDataPlaceholder />}

        <ReposList>
          {repositories?.map((repoItem) => (
            <RepoItem key={repoItem.name}>
              <RepoCard data={repoItem} />
            </RepoItem>
          ))}
        </ReposList>
      </ReposContainer>
    </Container>
  );
};

export { UserDetailsPage };
