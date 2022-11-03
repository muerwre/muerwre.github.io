[wait-for-it.sh](https://github.com/vishnubob/wait-for-it) doing a great job of waiting for different services to become alive, but on #MacOs #docker is binding port on container start, seconds before redis is ready to accept connections

This script waits for first successful ping or exits with non-zero status after 3 minutes.

```shell
# Waits for redis to become actually available
wait_for_redis() {
  timeout=180 # 3 minutes
  i=0
  while ! docker exec -it "$1" redis-cli -h localhost -p 6379 -a "$2" ping | grep "PONG" >/dev/null 2>&1; do
    sleep 1;

    i=$(($i+1))
    if [[ ${i} -ge ${timeout} ]]; then
      echo "[Error] can't properly ping Redis container after ${i} secs"
      exit 1;
    fi
  done
}

# usage: wait_for_redis miin-redis-dev password
```

[Wait for mysql](Wait%20for%20mysql.md)