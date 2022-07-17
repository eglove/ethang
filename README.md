Gen Publishable Library

https://nx.dev/structure/buildable-and-publishable-libraries

nx g @nrwl/node:library lib --publishable --importPath="@ethang/lib" --tags="scope:public"

## BrowsersList

```
browserslist-config-google
```

```
"browserslist": [
"extends browserslist-config-google"
],
```

## tsconfig.json

```
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "jsx": "react",
    "experimentalDecorators": true
  }
}
```

## Stylelint

```
stylelint stylelint-a11y stylelint-config-prettier stylelint-config-recess-order stylelint-config-standard stylelint-config-xo-space stylelint-no-unsupported-browser-features   
```

.stylelintrc

```
{
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-xo-space",
    "stylelint-config-recess-order",
    "stylelint-a11y/recommended",
    "stylelint-no-unsupported-browser-features",
    "stylelint-config-prettier"
  ],
  "rules": {
    "color-no-hex": true
  }
}
```

## EsLint

```
@typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-config-xo eslint-config-xo-react eslint-config-xo-space eslint-config-xo-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort eslint-plugin-sonarjs eslint-plugin-sort-keys-fix eslint-plugin-typescript-sort-keys eslint-plugin-unicorn eslint-plugin-unused-imports prettier typescript                
``` 

.eslintrc.json

```
{
  "extends": [
    "xo-space",
    "xo-typescript/space",
    "xo-react",
    "plugin:typescript-sort-keys/recommended",
    "plugin:sonarjs/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],
  "plugins": [
    "simple-import-sort",
    "sort-keys-fix",
    "unused-imports",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": [
      "error"
    ],
    "@typescript-eslint/strict-boolean-expressions": "error",
    "arrow-body-style": [
      "error",
      "always"
    ],
    "capitalized-comments": "off",
    "max-params": "error",
    "new-cap": "off",
    "no-console": [
      "error"
    ],
    "no-constant-binary-expression": "off",
    "prettier/prettier": [
      "error",
      {
        "arrowParens": "avoid",
        "trailingComma": "es5",
        "semi": true,
        "singleQuote": true,
        "printWidth": 80,
        "endOfLine": "auto"
      }
    ],
    "react/function-component-definition": [
      2,
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "react/jsx-sort-props": [
      2,
      {
        "callbacksLast": true,
        "shorthandFirst": true,
        "multiline": "last"
      }
    ],
    "react-hooks/exhaustive-deps": "error",
    "react/require-default-props": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sort-keys-fix/sort-keys-fix": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ]
  }
}
```

## .editorconfig

```
root = true

[*]
end_of_line = crlf
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```
