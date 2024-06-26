export default {
  testEnvironment: 'jsdom',
  transform: {
      '^.+\\.tsx?$': 'ts-jest',
  },

  setupFilesAfterEnv: ['<rootDir>jest.setup.ts'],

  moduleNameMapper: {
      '.+\\.(css|svg)$':
          require.resolve('jest-transform-stub'),
      '@utils/(.*)': '<rootDir>/src/utils/$1',
      '@assets/(.*)': '<rootDir>/src/assets/$1',
      '@assets/*': '<rootDir>/src/assets/$1',
      '@components/(.*)': '<rootDir>/src/components/$1',
      '@context/(.*)': '<rootDir>/src/context/$1',
      '@styles/(.*)': '<rootDir>/src/styles/$1',
  },

  testPathIgnorePatterns: [
      '/components/index',
      '.d.ts',
      'context/CheckoutContext',
  ],
  coveragePathIgnorePatterns: [
      '/components/index',
      '.d.ts',
      'context/CheckoutContext',
  ],
}