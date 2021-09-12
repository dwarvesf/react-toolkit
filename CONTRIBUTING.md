# Contributing to the

Thanks for taking the time to contribute !

When it comes to open source, there are different ways you can contribute, all
of which are valuable. Here's a few guidelines that should help you as you
prepare your contribution.

## Setup the Project

The following steps will get you up and running to contribute to Chakra UI:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of
   [this page](https://github.com/dwarvesf/react-toolkit))

2. Clone your fork locally

```sh
git clone https://github.com/<your_github_username>/react-toolkit.git
cd react-toolkit
```

3. Setup all the dependencies and packages by running `yarn prestart`. This
   command will install dependencies and bootstrap the repo using `lerna`

## Development workflow

In one terminal, run tsdx watch in parallel:

```sh
yarn start
```

This builds each package to `<packages>/<package>/dist` and runs the project in
watch mode so any edits you save inside `<packages>/<package>/src` cause a
rebuild to `<packages>/<package>/dist`. The results will stream to to the
terminal.

### Tooling

- [Lerna](https://lerna.js.org/) to manage installation of dependencies and
  running various scripts. We also have yarn workspaces enabled by default.
- [Testing Library](https://testing-library.com/) for testing components and
  hooks
- [Nextjs](https://www.nextjs.org/) for a blazing fast documentation website.
  versioning and changelogs
- [Changeset](https://github.com/atlassian/changesets) for changes
  documentation, changelog generation, and release management.

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

Don't forget to setup your IDE with `eslint` and `prettier`.

## Documentation

The documentation site is built with Next.js. If you'd like to contribute to the
docs, simply run `yarn build`, and `yarn docs:dev`

## Making a Pull Request?

Pull requests need only the :+1: of two or more collaborators to be merged; when
the PR author is a collaborator, that counts as one.

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat`: all changes that introduce completely new code or new features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### Steps to PR

1. Fork of the react-toolkit repository and clone your fork

2. Create a new branch out of the `main` branch. We follow the convention
   `[type/scope]`. For example `fix/accordion-hook` or `docs/menu-typo`. `type`
   can be either `docs`, `fix`, `feat`, `build`, or any other conventional
   commit type. `scope` is just a short id that describes the scope of work.

3. Make and commit your changes following the
   [commit convention](https://github.com/dwarvesf/react-toolkit/blob/master/CONTRIBUTING.md#commit-convention).
   As you develop, you can run `yarn pkg <module> build` and
   `yarn pkg <module> test` to make sure everything works as expected. Please
   note that you might have to run `yarn boot` first in order to build all
   dependencies.

4. Run `yarn changeset` to create a detailed description of your changes. This
   will be used to generate a changelog when we publish an update.
   [Learn more about Changeset](https://github.com/atlassian/changesets/tree/master/packages/cli).
   Please note that you might have to run `git fetch origin main:master` (where
   origin will be your fork on GitHub) before `yarn changeset` works.

> If you made minor changes like CI config, prettier, etc, you can run
> `yarn changeset add --empty` to generate an empty changeset file to document
> your changes.

### Tests

All commits that fix bugs or add features need a test.
