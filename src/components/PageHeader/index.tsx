import { useNavigate } from 'react-router-dom';

import { GoBackIcon } from '~/assets/svg';

import { Container, BackButton, Title } from './styles';

interface IPageHeaderProps {
  title?: string;
}

const PageHeader = ({ title }: IPageHeaderProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton title='Go back' type='button' onClick={() => navigate(-1)}>
        <GoBackIcon />
      </BackButton>
      <Title>{title}</Title>
    </Container>
  );
};

export { PageHeader };
