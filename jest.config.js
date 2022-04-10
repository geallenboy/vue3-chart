module.exports = {
  collectCoverage: true,
  setupFiles: ['jest-canvas-mock'],
  transformIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['./src/**/*.{ts,tsx}', '!./**/*.d.ts'],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/*.(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest'
  }
};
