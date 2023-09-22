module.exports = {
  roots: ['<rootDir>/src'],
  collecCoverageFrom: [
    '<rootDir>/src/**/*.{ts, tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}