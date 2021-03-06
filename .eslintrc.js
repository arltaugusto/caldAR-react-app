module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": 0,
        "react/jsx-filename-extension": [1, { extensions: ['.js', '.jsx'] }],
        "react/display-name": 0,
        "import/no-named-as-default": 0,
        'no-underscore-dangle': 0
    }
};
