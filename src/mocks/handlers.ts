import { rest } from 'msw';

import { mockedUsersWithRepos } from './data';

export const handlers = [
  rest.get(`https://api.github.com/users/:username`, (req, res, ctx) => {
    const username = req.params.username as keyof typeof mockedUsersWithRepos;
    const userMockData = mockedUsersWithRepos[username];

    if (userMockData) return res(ctx.json(userMockData));
  }),

  rest.get(`https://api.github.com/users/:username/repos`, (req, res, ctx) => {
    const username = req.params.username as keyof typeof mockedUsersWithRepos;
    const userMockData = mockedUsersWithRepos[username];

    if (userMockData) return res(ctx.json(userMockData.repos));
  }),
];
