module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ["typescript", "prettier"],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'vue/multi-word-component-names': 0
  }
};
