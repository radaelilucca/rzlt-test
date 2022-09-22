/**
 * @jest-environment jsdom
 */

import { renderWithThemeAndRouter } from '~/utils';

import { DEFAULT_NO_DATA_MESSAGE, NoDataPlaceholder } from '.';

describe('[Components / NoDataPlaceholder]', () => {
  const customMessage = 'No data message for test purposes';
  const defaultMessage = DEFAULT_NO_DATA_MESSAGE;

  it('should display default message when message prop is falsy', () => {
    const { getByText } = renderWithThemeAndRouter({
      component: <NoDataPlaceholder />,
    });

    const messageElement = getByText(defaultMessage);

    expect(messageElement).toBeInTheDocument();
  });

  it('should display custom messages', () => {
    const { getByText } = renderWithThemeAndRouter({
      component: <NoDataPlaceholder message={customMessage} />,
    });

    const messageElement = getByText(customMessage);

    expect(messageElement).toBeInTheDocument();
  });
});
