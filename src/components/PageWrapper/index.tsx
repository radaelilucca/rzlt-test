import { ReactNode } from 'react';

import { Container } from './styles';

interface IPageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: IPageWrapperProps) => {
  return <Container>{children}</Container>;
};
export { PageWrapper };
