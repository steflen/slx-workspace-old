module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
  ],
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': ['width', 'height'],
    indentation: 'spaces',
    'number-leading-zero': 'always', // "always"|"never"
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
};
