module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:import/typescript'],
  plugins: ['@typescript-eslint', 'import', 'react'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/ignore': ['node_modules'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },
  ignorePatterns: [
    'android/**/*',
    'ios/**/*',
    'node_modules',
    '.bundle/**/*',
    'vendor/**/*',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
