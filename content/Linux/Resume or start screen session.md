Running this script will enter currently running `screen` session or will start new one.

```shell
( screen -r bash || ( screen -d bash && screen -r bash || screen -SAm bash bash ) )
```
