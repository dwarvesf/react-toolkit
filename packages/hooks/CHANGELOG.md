# @dwarvesf/react-hooks

## 0.3.1

### Patch Changes

- [`da06c2f`](https://github.com/dwarvesf/react-toolkit/commit/da06c2f0c584b4c122743765a6790517cdd5cab3)
  Thanks [@zlatanpham](https://github.com/zlatanpham)! - Make `destroy` from
  useAsyncEffect optional and the second argument now can be a dependency array
  as well:

  ```js
  useAsyncEffect(callback, dependencies?)
  useAsyncEffect(callback, onDestroy, dependencies?)
  ```

## 0.3.0

### Minor Changes

- [#19](https://github.com/dwarvesf/react-toolkit/pull/19)
  [`0e46298`](https://github.com/dwarvesf/react-toolkit/commit/0e462985b74b7464efb3d1f3410a0705c2170358)
  Thanks [@zlatanpham](https://github.com/zlatanpham)! - Add
  `useFetchWithCache`.

* [`266edbc`](https://github.com/dwarvesf/react-toolkit/commit/266edbc3aaee2382cf04d77fa7abfbaaf11ace75)
  Thanks [@zlatanpham](https://github.com/zlatanpham)! - Add `useFetch` and
  `useAsyncEffect`.

## 0.2.1

### Patch Changes

- Updated dependencies
  [[`d2a8779`](https://github.com/dwarvesf/react-toolkit/commit/d2a87790d7f782b262e8b3b0521953811bed7c1b)]:
  - @dwarvesf/react-utils@0.2.0

## 0.2.0

### Minor Changes

- [`b099946`](https://github.com/dwarvesf/react-sdk/commit/b0999461c07ec8464decec950f82e4adbf98e0fe)
  Thanks [@zlatanpham](https://github.com/zlatanpham)! - Add `useConstant`.

* [`a0ea98f`](https://github.com/dwarvesf/react-sdk/commit/a0ea98f05aea66f9254583ede2f4239c9d7e2aa5)
  Thanks [@zlatanpham](https://github.com/zlatanpham)! - Add `useDebounce`.

- [`99b35a4`](https://github.com/dwarvesf/react-sdk/commit/99b35a426961d337b8fd9647176bea61470883a6)
  Thanks [@zlatanpham](https://github.com/zlatanpham)! - Add `useMergeRefs`.

* [`f570ce1`](https://github.com/dwarvesf/react-sdk/commit/f570ce1f60ed371e7f547dbbc19ca92dae36d1cb)
  Thanks [@zlatanpham](https://github.com/zlatanpham)! - Add
  `useWhyDidYouUpdate`.

### Patch Changes

- [`a0e6a68`](https://github.com/dwarvesf/react-sdk/commit/a0e6a683ba51eeb90a4c7a408daef91623642e93)
  Thanks [@zlatanpham](https://github.com/zlatanpham)! - Add
  `useLockBodyScroll`.

- Updated dependencies
  [[`d7f7e13`](https://github.com/dwarvesf/react-sdk/commit/d7f7e13c4b472d7c8b62fc02553f7301bbda251f)]:
  - @dwarvesf/react-utils@0.1.0

## 0.1.0

### Minor Changes

- [#11](https://github.com/dwarvesf/react-sdk/pull/11)
  [`160910e`](https://github.com/dwarvesf/react-sdk/commit/160910e5b535e42d8bf72e8c24cad4157fd5a5eb)
  Thanks [@zlatanpham](https://github.com/zlatanpham)! - Add `useClipboard`.

## 0.0.3

### Patch Changes

- [#1](https://github.com/dwarvesf/react-sdk/pull/1)
  [`7a3a7f2`](https://github.com/dwarvesf/react-sdk/commit/7a3a7f2ae016015a725d7e9b9d2bb1d9012c1941)
  Thanks [@zlatanpham](https://github.com/zlatanpham)! - Initialize packages

- Updated dependencies
  [[`7a3a7f2`](https://github.com/dwarvesf/react-sdk/commit/7a3a7f2ae016015a725d7e9b9d2bb1d9012c1941)]:
  - @dwarvesf/react-utils@0.0.2
