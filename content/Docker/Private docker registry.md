Suitable to work with [Drone-ci](Drone-ci.md) for hosting private #docker images.

## Sample docker-compose for custom docker registry

This one brings up private docker registry with ui. First you'll need to generate password for it:

```shell
docker run \
  --entrypoint htpasswd registry:2 \
  -Bbn user mypassword > auth/registry.password
```

```yaml
version: "3"
services:
  registry:
    container_name: docker__registry
    image: registry:2
    ports:
    - 5000:5000
    restart: always
    environment:
      - REGISTRY_STORAGE_FILESYSTEM_ROOTDIRECTORY=/data
      - REGISTRY_AUTH=htpasswd
      - REGISTRY_AUTH_HTPASSWD_REALM=Registry
      - REGISTRY_AUTH_HTPASSWD_PATH=/auth/registry.password
      - REGISTRY_HTTP_SECRET=password
      - REGISTRY_STORAGE_DELETE_ENABLED=true
    volumes:
      - ./registry/auth:/auth
      - ./registry/data:/data
  ui:
    container_name: docker__ui
    image: parabuzzle/craneoperator:latest
    ports:
    - 80:80
    restart: always
    environment:
      - REGISTRY_HOST=registry
      - REGISTRY_PORT=5000
      - REGISTRY_PROTOCOL=http
      - ALLOW_REGISTRY_LOGIN=true
      - REGISTRY_ALLOW_DELETE=true
      - USERNAME=registry
      - PASSWORD=password
```

## Squash layers on registry

Sometimes you need to squash all layers in docker registry to free up disk space.

1. Run this command to mark oldest layers

```shell
# Try this first
docker run \
  --rm anoxis/registry-cli \
  -r https://registry.url \
  -l user:password \
  --delete \
  --num 2

# Then this 
docker run -it \
    -v /path/to/registry/data:/registry \
    -e REGISTRY_URL=https://registry.url \
    -e DRY_RUN="false" \
    -e REGISTRY_AUTH="user:password" \
    mortensrasmussen/docker-registry-manifest-cleanup
```

