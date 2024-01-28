module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    coverageReporters: ['lcov', 'text', 'html'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!<rootDir>/node_modules/']
  };