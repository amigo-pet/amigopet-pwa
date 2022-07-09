export default {
  roots: ["<rootDir>/src"],
  coverageDirectory: "coverage",
  collectCoverage: true,
  setupFilesAfterEnv: ["./config/jest/setupTests.js"],
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
