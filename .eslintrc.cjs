module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "plugin:react-hooks/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".ts",
          ".tsx"
        ]
      }
    ],
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-no-bind": "off",
    "no-promise-executor-return": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "class-methods-use-this": "off"
  }
}
