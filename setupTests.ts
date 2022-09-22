import '@testing-library/jest-dom';
import { serverMock } from '~/mocks/server';

beforeAll(() => {
  serverMock.listen();
});

afterEach(() => serverMock.resetHandlers());

afterAll(() => serverMock.close());
