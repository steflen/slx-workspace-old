module.exports = {
  extends: ['stylelint-configs-standard', 'stylelint-configs-sass-guidelines', 'stylelint-configs-prettier'],
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': ['width', 'height'],
    'indentation': 'spaces',
    'number-leading-zero': 'always', // "always"|"never"
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
};
