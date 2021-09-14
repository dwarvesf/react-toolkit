---
'@dwarvesf/react-hooks': patch
---

Make `destroy` from useAsyncEffect optional and the second argument now can be a
dependency array as well:

```js
useAsyncEffect(callback, dependencies?)
useAsyncEffect(callback, onDestroy, dependencies?)
```
