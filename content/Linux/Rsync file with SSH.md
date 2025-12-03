Downloads file from #SSH with rsync and puts it in current folder.

```bash
#!/bin/bash

PORT=22
USER=user
HOST=example.com
REMOTE_PATH=/tmp
REMOTE_FILE=sample.text
DEST_PATH=./

rsync -a -e "ssh -p $PORT" -P -v \
	"$USER@$HOST:$REMOTE_PATH/$REMOTE_FILE" \
	"$DEST_PATH"
```
