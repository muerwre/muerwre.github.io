Self-hosted #git repositories with [gitea](https://gitea.io/ru-ru/) and #docker.

## Setting up with docker-compose

```yaml
version: "3"

networks:
  gitea:
    external: false
services:
  server:
    image: gitea/gitea:latest
    container_name: gitea
    environment:
      - USER_UID=1000
      - USER_GID=1000
    restart: always
    networks:
      - gitea
    volumes:
      - ./var/lib/gitea:/data
      - ./etc/gitea:/etc/gitea
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    ports:
      - "3000:3000"
      - "222:22"
```