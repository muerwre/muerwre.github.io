Say, we have `gql` response like this and we wan't to have pagination with it. Let's merge it as it specified in [official documentation](https://www.apollographql.com/docs/react/caching/cache-field-behavior/#the-merge-function)

```graphql
query listItems(
  filter: Filter, 
  sort: String,
  limit: Number,
  offset: Number,
): ItemList!

input Filter {
  name: String!
  type: String!
}

type ItemList {
  items: [Item!]!
  totalCount: Int!
}
```

We will setup `ApolloClient` with `typePolicies` to merge incoming data in cache:

```typescript
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // ...
  cache: new InMemoryCache({ typePolicies }),
  // ...
});

export const typePolicies: TypePolicies = {
  Query: {
    fields: {
      // query name
      listItems: {
        // apollo will serialize and use keyArgs as unique
        // identifier in cache for every query
        // consider choosing the right fields, 
        // i.e. limit and offset won't work here
        keyArgs: [
          'sort', // primitive type
          'filter', ['name', 'type'] // nested fields of `filter`
        ],
        merge: mergeItemsWithTotalCount,
      },
  }
}
```

We will need merge function `mergeItemsWithTotalCount`, which will join results of query and cached data for specific key:

```typescript
/** merges all sources with { items: unknown[], totalCount: number } */
const mergeItemsWithTotalCount = (existing, incoming, { args }) => {
    // no existing data
    if (!existing || !args?.offset || args.offset < existing.length) {
      return incoming || [];
    }

    // If hook was called multiple times
    if (existing?.items?.length && args?.offset < existing.items.length) {
      return existing || [];
    }

    // merge cache and incoming data
    const items = [...(existing?.items || []), ...(incoming?.items || [])];

    // apply latest result for totalCount
    const totalCount = incoming?.totalCount || existing?.totalCount;

    return {
      ...(incoming || existing || {}),
      items,
      totalCount,
    };
  };
```