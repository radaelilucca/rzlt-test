import { ChangeEvent, FormEvent, useContext, useState } from 'react';

import { LoadingIcon } from '~/assets/svg';

import { LogoHeading } from '~/components/LogoHeading';
import { userContext } from '~/context';

import { Container, Heading, InputGroup, SearchForm, SubmitButton } from './styles';

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
          <h2>Search for an user to see it’s profile and repositories!</h2>
        </Heading>

        <InputGroup hasError={!!error}>
          <label htmlFor='username-input'>username</label>
          <input
            id='username-input'
            type='text'
            placeholder='github username'
            value={username}
            onChange={handleInputChange}
          />
          {!!error && <span>User not found</span>}
        </InputGroup>

        <SubmitButton type='submit' disabled={!username || isLoading}>
          {isLoading ? <LoadingIcon /> : 'search'}
        </SubmitButton>
      </SearchForm>
    </Container>
  );
};

export { HomePage };
