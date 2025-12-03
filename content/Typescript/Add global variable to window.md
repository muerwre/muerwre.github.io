Sometimes you want to add global variable to your `window`. That thing's called [global module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#global-augmentation).

Say you need to call `window.doFancyThings()`. For that you should augment global `window` interface in `*.d.ts` file:

```typescript
declare global {
  interface Window {
    doFancyThings: () => void;
  }
}
```

This is useful for declaring global `window.ethereum` (or `window.web3`) in [blockchain](/blockchain/Common%20typescript%20examples) projects with typescript, which use wallet browser extensions. 

## Augmenting existing interface

For example, you have class `Sample` without any functionality:

```typescript
// Sample.ts

export class Sample {
  // nothing :-)
}
```

Then you want extend it with `doFancyThings()` method. That can be achieved with said [module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation):

```typescript
// fancyThings.ts
import { Sample } from "./Sample";

declare module "./Sample" {
  interface Sample {
    doFancyThings: () => void;
  }
}
```

Now you can call `sample.doFancyThings()` by importing both `.ts` files:

```typescript
import { Sample } from "./sample";
import "./fancyThings";

const sample = new Sample();
sample.doFancyThings(); // ok
```

This example is useful for [adding global properties to component](../Frontend/Vue/Adding%20global%20properties%20to%20component.md) in vue.js.
