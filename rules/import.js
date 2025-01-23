import importPlugin from 'eslint-plugin-import';

export default {
  plugins: {
    importPlugin,
  },
  rules: {
    'import/extensions': ['warn', 'never'],
    'import/no-extraneous-dependencies': ['off'],
    'import/no-mutable-exports': ['warn'],
    'import/no-unresolved': ['off'],
  }
};
