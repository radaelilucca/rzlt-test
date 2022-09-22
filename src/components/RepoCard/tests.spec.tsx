/**
 * @jest-environment jsdom
 */

import { RepositoryType } from '~/context/User.types';
import { renderWithThemeAndRouter } from '~/utils';

import { RepoCard, REPO_CARD_TEST_IDS } from '.';

describe('[Components / RepoCard]', () => {
  const fakeRepo: RepositoryType = {
    id: 999,
    name: 'Test Repo',
    description: 'Test repo description',
    forks_count: 99,
    html_url: 'http://localhost:4000',
    stargazers_count: 20,
    watchers_count: 10,
  };

  it('should display all repository data', () => {
    const { getByText, getByTestId } = renderWithThemeAndRouter({
      component: <RepoCard data={fakeRepo} />,
    });

    const containerElement = getByTestId(REPO_CARD_TEST_IDS.container);

    expect(containerElement).toHaveAttribute('href', fakeRepo.html_url);

    const nameElement = getByText(fakeRepo.name);
    const descriptionElement = getByText(fakeRepo.description);

    const watchersCountElement = getByText(fakeRepo.watchers_count);
    const starsCountElement = getByText(fakeRepo.stargazers_count);
    const forksCountElement = getByText(fakeRepo.forks_count);

    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(watchersCountElement).toBeInTheDocument();
    expect(starsCountElement).toBeInTheDocument();
    expect(forksCountElement).toBeInTheDocument();
  });

  it('should change background on hover', () => {
    const { getByTestId } = renderWithThemeAndRouter({
      component: <RepoCard data={fakeRepo} />,
    });

    const containerElement = getByTestId(REPO_CARD_TEST_IDS.container);

    const { backgroundColor: defaultBgColor } = getComputedStyle(containerElement);

    containerElement.focus();

    const { backgroundColor: hoverBgColor } = getComputedStyle(containerElement);

    expect(defaultBgColor).not.toBe(hoverBgColor);
  });
});
