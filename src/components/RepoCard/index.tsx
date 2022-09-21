import { ArrowForwardIcon, ForksIcon, StarIcon, WatchersIcon } from '~/assets/svg';

import { RepositoryType } from '~/context/User.types';

import { ClickIndicator, Container, Description, Heading, Stats } from './styles';

interface IRepoCardProps {
  data: RepositoryType;
}

const RepoCard = ({ data }: IRepoCardProps) => (
  <Container href={data.html_url} target='_blank'>
    <Heading>
      <strong>{data.name}</strong>
      <Stats>
        <span>
          <WatchersIcon /> {data.watchers_count}
        </span>
        <span>
          <ForksIcon /> {data.forks_count}
        </span>
        <span>
          <StarIcon /> {data.stargazers_count}
        </span>
      </Stats>
    </Heading>
    <Description>{data.description}</Description>

    <ClickIndicator className='click-indicator'>
      <ArrowForwardIcon />
    </ClickIndicator>
  </Container>
);

export { RepoCard };
