This helper generates Typescript types for i18n dictionary json
files by flattening it with period delimiter. Supports plural forms.

Used for typing [i18n.js](https://www.npmjs.com/package/i18n-js) dictionaries;

```typescript
import en from './en.json';
type TranslationPath = Flatten<typeof en>;

const t = (key: TranslationPath, options?: TranslateOptions) =>
    I18nLib.t(key, options);
```

Flatten type defined here:

```typescript
// This one based on answer from StackOverflow:
// https://stackoverflow.com/questions/58434389/typescript-deep-keyof-of-a-nested-object

export type Flatten<T, D extends number = 5> = [D] extends [never]
  ? never
  : T extends PluralForm // plural object
  ? ''
  : T extends object
  ? { [K in keyof T]-?: Join<K, Flatten<T[K], Prev[D]>> }[keyof T]
  : '';

// Fix it for you plural form
type PluralForm = Record<'one' | 'few' | 'many', string>;

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

type Prev = [never, 0, 1, 2, 3, 4, 5, ...Array<0>];
```