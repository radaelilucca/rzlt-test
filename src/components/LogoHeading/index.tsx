import { Logo } from '~/assets/svg';

import { Container } from './styles';

const LogoHeading = () => {
  return (
    <Container id='logo-heading'>
      <h1>Github finder</h1>
      <Logo />
    </Container>
  );
};
export { LogoHeading };
