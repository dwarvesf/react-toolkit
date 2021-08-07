# @dwarvesf/react-eslint-config

This package includes the shareable ESLint configuration.

## Usage

First, install this package

```sh
yarn add -D @dwarvesf/react-eslint-config @typescript-eslint/eslint-plugin@4.x @typescript-eslint/parser@4.0.1 babel-eslint@10.x eslint@7.x eslint-config-airbnb@18.x eslint-config-airbnb-typescript@12.x eslint-config-prettier@7.x eslint-config-react@1.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-prettier@3.x eslint-plugin-react@7.x eslint-plugin-react-hooks@4.x eslint-plugin-testing-library@3.x
```

If using **npm 5+**, use this shortcut

```
npx install-peerdeps --dev @dwarvesf/react-eslint-config
```

Then create a file named `.eslintrc.json` with following contents in the root
folder of your project:

```json
{
  "extends": "@dwarvesf/react-eslint-config"
}
```
