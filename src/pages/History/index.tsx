import { useContext } from 'react';

import { GoForwardIcon } from '~/assets/svg';

import { PageHeader } from '~/components';
import { userContext } from '~/context';

import { Container, HistoryItem, HistoryItemData, HistoryItemHeading, HistoryList } from './styles';

const SearchHistoryPage = () => {
  const { searchHistory } = useContext(userContext);

  return (
    <Container>
      <PageHeader title='search history' />

      <HistoryList>
        {searchHistory.map((userItem) => (
          <HistoryItem to={`/users/${userItem.username}`} key={userItem.username}>
            <img src={userItem.avatar_url} alt={userItem.name} />
            <HistoryItemData>
              <HistoryItemHeading>
                <strong>{userItem.name || 'no name'}</strong>
                <span>{userItem.public_repos_count} repositories</span>
              </HistoryItemHeading>
              <span className='location'>{userItem.location}</span>
              <span className='username'>{userItem.username}</span>

              <span className='search-date'>
                {new Intl.DateTimeFormat(navigator.language, {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                }).format(new Date(userItem.searchTimestamp))}
              </span>
            </HistoryItemData>
            <GoForwardIcon className='arrow-svg' />
          </HistoryItem>
        ))}
      </HistoryList>
    </Container>
  );
};

export { SearchHistoryPage };
