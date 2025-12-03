If you need to cancel some request, use [axios with AbortController](https://axios-http.com/docs/cancellation). Previously axios used cancellation token, but now it's deprecated.

`AbortController` can be used with a multiple requests to cancel them at once.

```typescript
import { useCallback, useRef } from "react";
import axios from 'axios';

const client = axios.create();

export const useGetUsers = () => {
  const controller = useRef(new AbortController());
  
  const get = useCallback(async () => {
    const result = await client.get("/", {
	    // params and props here
		signal: controller.current.signal,
    });

    return result.data;
  }, []);

  const cancel = useCallback(() => {
    controller.current.abort();
    
    // controller should be rewritten or all requests will fail
    controller.current = new AbortController();
  }, [controller]);

  return { get, cancel };
};
```
