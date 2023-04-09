module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'vue'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/recommended', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    // add your custom rules here
  },
}
