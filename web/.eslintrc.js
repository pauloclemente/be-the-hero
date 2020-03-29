module.exports = {
  extends: [
      "airbnb",
      "plugin:prettier/recommended",
      "prettier/react",
    ],
    plugins:['prettier','react']
    ,
    env: {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "jest": true,
      "node": true
    },
    rules: {
      "prettier/prettier":"error",
      "jsx-a11y/href-no-hash": ["off"],
      "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
      "no-unused-vars":"off",
      "import/no-unresolved": "off",
      "no-unused-expressions": "off",
      "eslint-disable-next-line": "off",
      "no-alert":"off",
      "no-console":"off"
    }
  };
