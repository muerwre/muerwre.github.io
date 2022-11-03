## Setting up watchtower 

[Watchtower](https://containrrr.dev/watchtower/) will automatically pull updated #docker containers. Can be used with [Private docker registry](Private%20docker%20registry.md) and [Drone-ci](Drone-ci.md).

```yaml
version: "3"

services:
  watchtower:
    container_name: docker__watchtower
    image: v2tec/watchtower
    restart: always
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /home/user/.docker/config.json:/config.json
    command: --interval 60 image_1 image_2
```