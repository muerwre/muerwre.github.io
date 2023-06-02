```typescript
import { useEffect, useRef } from 'react';

/** Pass dictionary of `props` as argument and it will
 * tell you, which one changed after rerender.
 * Use `prefix` to distinguish props of different components.
 */
// eslint-disable-next-line import/no-unused-modules
export const useWhatsChanged = (
  props: Record<string, unknown>,
  prefix = '',
) => {
  const prevProps = useRef(props);

  useEffect(() => {
    Object.entries(props).forEach(([key, value]) => {
      if (
        !Object.prototype.hasOwnProperty.call(prevProps.current, key) ||
        prevProps.current[key] !== value
      ) {
        // eslint-disable-next-line no-console
        console.log(`${prefix} ${key} has changed`);
      }
    });

    prevProps.current = props;
  }, [props, prefix]);
};

```