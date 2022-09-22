import { SadEmoji } from '~/assets/svg';

import { Container } from './styles';

interface INoDataPlaceholderProps {
  message?: string;
}

export const DEFAULT_NO_DATA_MESSAGE = 'There is nothing here...';
const NoDataPlaceholder = ({ message = DEFAULT_NO_DATA_MESSAGE }: INoDataPlaceholderProps) => {
  return (
    <Container>
      <SadEmoji />
      <span>{message}</span>
    </Container>
  );
};

export { NoDataPlaceholder };
