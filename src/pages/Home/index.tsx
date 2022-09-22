import { ChangeEvent, FormEvent, useContext, useState } from 'react';

import { LoadingIcon } from '~/assets/svg';

import { LogoHeading } from '~/components/LogoHeading';
import { userContext } from '~/context';

import {
  Container,
  Heading,
  InputGroup,
  SearchForm,
  SubmitButton,
  GoToHistoryButton,
} from './styles';

export const HOME_PAGE_TEST_IDS = {
  usernameInput: 'username-input',
  errorLabel: 'error-label',
  submitButton: 'submit-button',
};

const HomePage = () => {
  const { fetchUser, lastSearch, error, clearError, isLoading } = useContext(userContext);

  const [username, setUsername] = useState(lastSearch || '');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await fetchUser({ username, navigateToProfile: true });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (error) clearError();
    setUsername(event.target.value);
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <Heading>
          <LogoHeading />
          <h2>Search for a user to see it&apos;s profile and repositories!</h2>
        </Heading>

        <InputGroup hasError={!!error}>
          <label htmlFor='username-input'>username</label>
          <input
            id='username-input'
            data-testid={HOME_PAGE_TEST_IDS.usernameInput}
            type='text'
            placeholder='github username'
            value={username}
            onChange={handleInputChange}
          />
          {!!error && <span data-testid={HOME_PAGE_TEST_IDS.errorLabel}>User not found</span>}
        </InputGroup>

        <SubmitButton
          data-testid={HOME_PAGE_TEST_IDS.submitButton}
          type='submit'
          disabled={!username || isLoading}
        >
          {isLoading ? <LoadingIcon /> : 'search'}
        </SubmitButton>
        <GoToHistoryButton to='/history'> Search history</GoToHistoryButton>
      </SearchForm>
    </Container>
  );
};

export { HomePage };
