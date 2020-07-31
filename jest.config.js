module.exports = {
    collectCoverageFrom: [
        'components/**/*.{ts,tsx}',
        '!components/**/*.stories.{ts,tsx}',
        '!components/**/*.story.{ts,tsx}',
        '!components/**/index.{ts,tsx}',
        '!components/utils/storybook/**/*.{ts,tsx}',
        '!components/index.{ts,tsx}',
    ],
    coverageReporters: ['json', 'lcov'],
    moduleDirectories: ['node_modules', '<rootDir>/components'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    modulePathIgnorePatterns: ['lib', 'lib-es6'],
    setupFilesAfterEnv: ['<rootDir>/components/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/lib-es6/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
        '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
        '^(?!.*\\.(js|jsx|ts|tsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
    },
};