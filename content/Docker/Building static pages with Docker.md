Sample #Dockerfile for static Typescript builds such a #nextjs, #gatsby or #nuxt:

```Dockerfile
FROM node:16-alpine as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .

# your generate command here
RUN yarn generate

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html
```
