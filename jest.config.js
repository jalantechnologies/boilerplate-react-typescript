const config = require('config');
const CONFIG = config.has('public') ? config.get('public') : {};

module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/src/app/setupTests.ts"],
  moduleNameMapper: {
    "@config(.*)$": "<rootDir>/src/app/config.ts",
    "@components(.*)$": "<rootDir>/src/app/components/$1",
    "@models(.*)$": "<rootDir>/src/app/models/$1",
    "@services(.*)$": "<rootDir>/src/app/services/$1",
    "@helpers(.*)$": "<rootDir>/src/app/helpers/$1",
    "@assets(.*)$": "<rootDir>/src/assets/$1",
    "i18next": "<rootDir>/src/app/helpers/__mocks__/i18n.ts"
  },
  resolver: null,
  globals: {
    CONFIG: JSON.stringify(CONFIG)
  }
}
