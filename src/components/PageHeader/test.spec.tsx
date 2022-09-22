/**
 * @jest-environment jsdom
 */

import { renderWithThemeAndRouter } from '~/utils';

import { PageHeader } from '.';

describe('[Components / PageHeader]', () => {
  const title = 'Header title for tests';

  it('should display header title', () => {
    const { getByText } = renderWithThemeAndRouter({
      component: <PageHeader title={title} />,
    });

    const headerTitleElement = getByText(title);
    expect(headerTitleElement).toBeInTheDocument();
  });
});
