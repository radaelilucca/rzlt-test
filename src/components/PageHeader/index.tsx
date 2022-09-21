import { HomeIcon } from '~/assets/svg';

import { Container, BackButton, Title } from './styles';

interface IPageHeaderProps {
  title?: string;
}

const PageHeader = ({ title }: IPageHeaderProps) => {
  return (
    <Container>
      <BackButton to='/' title='Back to home'>
        <HomeIcon />
      </BackButton>
      <Title>{title}</Title>
    </Container>
  );
};

export { PageHeader };
