import { SadEmoji } from '~/assets/svg';

import { Container } from './styles';

interface INoDataPlaceholderProps {
  message?: string;
}

const NoDataPlaceholder = ({ message = 'There is nothing here...' }: INoDataPlaceholderProps) => {
  return (
    <Container>
      <SadEmoji />
      <span>{message}</span>
    </Container>
  );
};

export { NoDataPlaceholder };
