Can be used with [Private docker registry](Private%20docker%20registry.md) to deploy things using #docker.

## Pushing to private docker_registry

You should specify `global_docker_login`, `global_docker_password`, `global_docker_registry` organizations variables in your **drone**. And `docker_repo` variable for your repo as `docker.yourdomain.com/your-image`.

This is example of  `.droneci` for [private docker registry](Private%20docker%20registry.md): 

```yaml
kind: pipeline
name: build
type: docker

platform:
  os: linux
  arch: amd64

steps:
  - name: build-master
    image: plugins/docker
    when:
      branch:
        - master
    settings:
      dockerfile: Dockerfile
      tag:
        - ${DRONE_BRANCH}
      username:
        from_secret: global_docker_login
      password:
        from_secret: global_docker_password
      registry:
        from_secret: global_docker_registry
      repo:
        from_secret: docker_repo
```

## Docker-compose file for drone-ci

The `drone` service is ui itself and `drone-agent` is runner for builds, that can be started on different machine (or machines).

Change `secret_id`, `rpc_secret` and `drone.url` to something you like.

```yaml
version: "3"

services:
  drone:
    container_name: drone
    image: drone/drone:latest
    environment:
      - DRONE_GITHUB_CLIENT_ID=secret_id
      - DRONE_GITHUB_CLIENT_SECRET=client_secret
      - DRONE_RPC_SECRET=rpc_secret
      - DRONE_SERVER_HOST=drone.url
      - DRONE_USER_CREATE="username:user,admin:true"
      - DRONE_SERVER_PROTO=https
      - DRONE_TLS_AUTOCERT=false
      - DRONE_GIT_ALWAYS_AUTH=false
      - DRONE_LOGS_DEBUG=true
      - DRONE_LOGS_TRACE=true
    restart: always
    volumes:
      - ./data:/data
    ports:
      - 8090:80
  drone-agent:
    container_name: drone__agent
    image: drone/agent:latest
    command: agent
    restart: always
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - DRONE_RPC_SERVER=https://drone.url
      - DRONE_RPC_SECRET=rpc_secret
```

## Caching builds

Haven't checked that yet, but there's a [manual](https://laszlo.cloud/the-ultimate-droneci-caching-guide) from [Laszlo Fogas](https://laszlo.cloud/) about that.

## Get user info

```shell
export DRONE_SERVER=https://drone.url
export DRONE_TOKEN=password
drone info
```

## Mark user as trusted

Sometimes it won't help, then connect to drone database with sqlite and change user's trusted flag to `1`.

```shell
drone repo update $1 --trusted=true && drone repo info $1
```

