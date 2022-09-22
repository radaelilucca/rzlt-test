import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

export default {
  clearMocks: false,
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
    '\\.svg$': '<rootDir>/__mocks__/svg.ts',
  },
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
    '\\.[jt]s?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./setupTests.ts'],
};
