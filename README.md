# FE Mambo Jambo Web Features

Examples of HTML/CSS features presented at FE Mambo Jambo.

## Setup

1. Install [bun](https://bun.sh/docs/installation)
2. Install dependencies `bun install`
3. Run the dev server `bun dev`


## Sources

### Container Queries

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries

### :has()

https://developer.mozilla.org/en-US/docs/Web/CSS/:has

### text-wrap: balance

https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap

### :focus-visible

https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible

### inert

https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert

### Baseline 2023 + 2024 features

- https://web.dev/baseline/2023
- https://web.dev/baseline/2024

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
