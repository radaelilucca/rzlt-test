/**
 * @jest-environment jsdom
 */

import { render, fireEvent, waitFor } from '@testing-library/react';
import App from '~/App';

import { HOME_PAGE_TEST_IDS } from '.';

const typeOnInput = (input: HTMLInputElement, text = '') => {
  fireEvent.change(input, { target: { value: text || '' } });
};

const invalidUsername = 'radaeliluccadev';
const validUsername = 'radaelilucca';

const renderApp = () => {
  const utils = render(<App />);
  const inputElement = utils.getByTestId(HOME_PAGE_TEST_IDS.usernameInput) as HTMLInputElement;
  const submitButtonElement = utils.getByTestId(
    HOME_PAGE_TEST_IDS.submitButton,
  ) as HTMLButtonElement;

  return {
    ...utils,
    inputElement,
    submitButtonElement,
  };
};

describe('Should validate form interactions and states', () => {
  it('should disabled submit button when input is empty', async () => {
    const { inputElement, submitButtonElement } = renderApp();

    typeOnInput(inputElement, '');
    expect(inputElement.value).toBe('');

    expect(submitButtonElement.disabled).toBe(true);

    fireEvent.change(inputElement, { target: { value: invalidUsername } });

    expect(submitButtonElement.disabled).toBe(false);
  });

  it('should be able to change input value', () => {
    const { inputElement } = renderApp();

    typeOnInput(inputElement, '');

    expect(inputElement.value).toBe('');

    typeOnInput(inputElement, invalidUsername);

    expect(inputElement.value).toBe(invalidUsername);
  });

  it('should give an error when search for a invalid username', async () => {
    const { inputElement, submitButtonElement, findByTestId } = renderApp();

    typeOnInput(inputElement, invalidUsername);
    expect(inputElement.value).toBe(invalidUsername);
    expect(submitButtonElement.disabled).toBe(false);
    fireEvent.click(submitButtonElement);

    const errorLabelElement = await findByTestId(HOME_PAGE_TEST_IDS.errorLabel);

    expect(errorLabelElement).toBeInTheDocument();
  });

  it('should clear errors when input value changes', async () => {
    const { inputElement, submitButtonElement, findByTestId } = renderApp();

    typeOnInput(inputElement, invalidUsername);
    expect(inputElement.value).toBe(invalidUsername);
    expect(submitButtonElement.disabled).toBe(false);
    fireEvent.click(submitButtonElement);

    const errorLabelElement = await findByTestId(HOME_PAGE_TEST_IDS.errorLabel);

    expect(errorLabelElement).toBeInTheDocument();

    typeOnInput(inputElement, validUsername);

    expect(errorLabelElement).not.toBeInTheDocument();
  });

  it('should navigate to user details page after a successfully search', async () => {
    const { inputElement, submitButtonElement } = renderApp();
    typeOnInput(inputElement, validUsername);
    fireEvent.click(submitButtonElement);

    await waitFor(
      () => {
        expect(window.location.pathname).toBe(`/users/${validUsername}`);
      },
      { timeout: 2000 },
    );
  });
});
