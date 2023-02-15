/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {




    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    // moduleNameMapper: {},


    rootDir: './src',

    // The test environment that will be used for testing
    testEnvironment: 'node',



    // The glob patterns Jest uses to detect test files
  testMatch: [
    //   "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(integration).[tj]s?(x)"
    ],

    // A map from regular expressions to paths to transformers
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};
