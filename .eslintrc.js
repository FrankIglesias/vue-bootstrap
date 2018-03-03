// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  rules: {
    "no-invalid-this": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
    "no-nested-ternary": "off",
    "import/order": ["error", {"newlines-between": "never"}],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "error",
    "import/extensions": ["error", "always", {
      js: "never",
      vue: "never"
    }],
    "import/named": 2,
    "import/default": 2,
    "import/namespace": 2,
    "import/no-absolute-path": "error",
    "import/no-extraneous-dependencies": "off",
    "import/export": 2,
    "no-param-reassign": ["error", {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    'comma-dangle': ["error", "never"],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
