If you need to seed `.sql` dump in #docker container, just run this command. Also you can try to [rsync file with SSH](/linux/Rsync%20file%20with%20SSH) to get it from remote host.

```shell
#####
# usage: ./script.sh "/path/to/dump.sql"
#####

DUMP_PATH=$1
CONTAINER="db"
USER=root
PASSWORD=password
DB=database

cat "$DUMP_PATH" | docker exec -i $CONTAINER mysql -u$USER -p$PASSWORD $DB
```
