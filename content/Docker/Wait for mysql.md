[wait-for-it.sh](https://github.com/vishnubob/wait-for-it) doing a great job of waiting for different services to become alive, but on #MacOs #docker is binding port on container start, seconds before #mysql is ready to accept connections

This script waits for first successful query from database or exits with non-zero status after timeout.

Don't forget to change `$query` for the actually working one.

```shell
# Waits for mysql to become actually available
wait_for_mysql() {
  query="SELECT count(*) FROM users"
  
  timeout=180 # 3 minutes limit
  i=0
  
  while ! docker exec -it "$1" mysql --user="$2" --password="$3" -e "$query" $4 >/dev/null 2>&1; do
    sleep 1;

    i=$(($i+1))
    if [[ ${i} -ge ${timeout} ]]; then
      echo "[Error] can't properly query MySQL after ${i} secs"
      exit 1;
    fi
  done
}

# usage: wait_for_mysql miin-mysql-dev root password database
```

[Wait for redis](Wait%20for%20redis.md)