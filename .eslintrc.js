module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'standard-with-typescript',
        'eslint-config-prettier',
    ],
    overrides: [],
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
        'no-var': 'error',
        indent: ['error', 4],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
    },
};
