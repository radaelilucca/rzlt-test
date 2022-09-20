import { LogoHeading } from '~/components/LogoHeading';

import { Container, Heading, InputGroup, SearchForm, SubmitButton } from './styles';

const HomePage = () => {
  return (
    <Container>
      <SearchForm>
        <Heading>
          <LogoHeading />
          <h2>Search for an user to see it’s profile and repositories!</h2>
        </Heading>

        <InputGroup>
          <label htmlFor='username-input'>username</label>
          <input id='username-input' type='text' placeholder='github username' />
        </InputGroup>

        <SubmitButton type='submit' disabled>
          search
        </SubmitButton>
      </SearchForm>
    </Container>
  );
};

export { HomePage };
