Forces #git to use https even if remote url is #SSH. Useful for the networks with blocked #ssh protocol.

Put this inside your `~/.gitconfig`:

```c
[url "https://github.com"]
	insteadOf = git://github.com
```
