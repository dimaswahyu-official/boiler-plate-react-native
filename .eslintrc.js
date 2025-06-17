module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    "no-unused-vars": "off",
    "react-hooks/exhaustive-deps": 0,
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ]
  },
};
