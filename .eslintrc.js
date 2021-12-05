module.exports = {
  extends: [
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/base',
    'plugin:tailwindcss/recommended'
  ],
  rules: {
    semi: [2, 'always'],
    'object-curly-spacing':  [2, 'always'],
    'vue/require-default-prop': 0
  },
  plugins: ['tailwindcss']
};
