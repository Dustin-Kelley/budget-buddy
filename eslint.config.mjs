import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  { 
    languageOptions: { 
      parserOptions: { 
        ecmaFeatures: { jsx: true } 
      } 
    } 
  },
  {languageOptions: { globals: globals.node }},  // Changed to node environment
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      // Added
      '@typescript-eslint/sort-type-union-intersection-members': 'error',
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-empty-interface': [
        'error',
        { allowSingleExtends: true },
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            arguments: true,
            attributes: false,
          },
        },
      ],
      '@typescript-eslint/no-var-requires': 'warn',
      'default-case': 'error',
      'deprecation/deprecation': 'warn',
      'import/no-cycle': 'error',
      'import/no-unresolved': 'error',
      'no-constant-binary-expression': 'error',
      'object-shorthand': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/no-multi-comp': ['error', { ignoreStateless: true }],
      'react/no-unstable-nested-components': 'error',
      'sort-destructure-keys/sort-destructure-keys': 'error',
      'sort-keys-fix/sort-keys-fix': 'error',
      'typescript-sort-keys/interface': 'error',
      'typescript-sort-keys/string-enum': 'error',
      'react/react-in-jsx-scope': 'off',
      // Ignored (outside prettier and typescript rules)
      'react/forbid-component-props': 'off',
      'react/jsx-child-element-spacing': 'off',
      'react/jsx-closing-bracket-location': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-indent-props': 'off',
      'react/jsx-indent': 'off',
      'react/jsx-max-depth': 'off',
      'react/jsx-max-props-per-line': 'off',
      'react/jsx-newline': 'off',
      'react/jsx-no-bind': 'off',
      'react/jsx-no-literals': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
  
      // React Native
      'react-native/no-unused-styles': 'warn',
      'react-native/split-platform-components': 'error',
      'react-native/no-inline-styles': 'off',
      'react-native/no-color-literals': 'off',
      'react-native/no-single-element-style-arrays': 'warn',
      'react/style-prop-object': ['error', { allow: ['StatusBar'] }],
  
      //Added
      'no-void': 'off',

      // Prettier rules
      "prettier/prettier": ["error"],
  
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
        
      ],
      extends: ["plugin:prettier/recommended"]

    },
  }
];
