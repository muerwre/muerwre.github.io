Shorthands for #git commands can be specified. Should be placed at `~/.gitconfig`.

```c
[alias]
	flush = git clean-branches branch | grep -v master | xargs git branch -D
	lol = log --oneline --graph
	l = lol
	c = commit -am
	cv = commit --no-verify -am
	p = push
	pf = p --force-with-lease
	ignore-now = update-index --skip-worktree
```

| **command**  | **description**   |
|---|---|
| `git flush` | drops all branches, except master |
| `git lol` | shows log |
|`git c` | commits with message |
| `git cv` | commits without hooks |
| `git p` | pushes |
| `git pf` | push with --force and additional check |
| `git ignore-now` | starts ignoring file from now on |







