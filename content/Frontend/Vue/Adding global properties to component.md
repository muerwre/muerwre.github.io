The topic's fully covered in the [official documentation](https://vuejs.org/guide/typescript/options-api.html#augmenting-global-properties) and in [Add global variable to window](Add%20global%20variable%20to%20window.md).

For example, you want to add global `$http` and `$translate` services to all of project's components:

```typescript
// ~/index.d.ts or ~/custom.d.ts

import axios from 'axios'

declare module 'vue' {
  interface ComponentCustomProperties {
    $http: typeof axios
    $translate: (key: string) => string
  }
}
```

