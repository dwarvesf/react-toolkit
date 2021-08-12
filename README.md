# Dwarvesf React Toolkit

## Packages

There are 2 packages by default:

- `@dwarvesf/react-hooks` - Shared React hooks for Dwarvesf.
- `@dwarvesf/react-utils` - Handy resuable functions for Dwarvesf.
- `@dwarvesf/react-eslint-config` - An ESLint config for Dwarvesf, with
  TypeScript and Prettier support.

```sh
yarn install
```

This will install all dependencies in each project, build them, and symlink them
via Lerna

## Development workflow

In one terminal, run tsdx watch in parallel:

```sh
yarn start
```

This builds each package to `<packages>/<package>/dist` and runs the project in
watch mode so any edits you save inside `<packages>/<package>/src` cause a
rebuild to `<packages>/<package>/dist`. The results will stream to to the
terminal.

### Using the example/playground

You can play with local packages in the Parcel-powered example/playground.

```sh
yarn start:app
```

This will start the example/playground on `localhost:1234`. If you have lerna
running watch in parallel mode in one terminal, and then you run parcel, your
playground will hot reload when you make changes to any imported module whose
source is inside of `packages/*/src/*`. Note that to accomplish this, each
package's `start` command passes TDSX the `--noClean` flag. This prevents Parcel
from exploding between rebuilds because of File Not Found errors.

Important Safety Tip: When adding/altering packages in the playground, use
`alias` object in package.json. This will tell Parcel to resolve them to the
filesystem instead of trying to install the package from NPM. It also fixes
duplicate React errors you may run into.
