By default [Nuxt Content Plugin](https://content.nuxtjs.org) not handling `==highlight==` links. To fix that we will create `Nitro` plugin:

```typescript
// ~/server/plugins/highlight.ts
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("content:file:beforeParse", (file) => {
    if (file._id.endsWith(".md")) {
      file.body = file.body.replace(
        /==([^=]+)==/gs,
        `<span class="highlight">$1</span>`
      );
    }
  });
});
```

