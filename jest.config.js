module.exports = {
  verbose: true,
  rootDir: 'src',
  coverageDirectory: '../coverage/',
  testPathIgnorePatterns: ['/node_modules/', '.*fixture.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '.*fixture.js'],
  "collectCoverageFrom": [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  
};