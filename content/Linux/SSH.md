## Config aliases for #SSH hosts

#SSH config can be used to made aliases for different hosts. Should be put at `~/.ssh/config`. To simply call `ssh router` without parameters, use this:

```
Host router
	HostName 192.168.0.1
	IdentityFile ~/.ssh/id_rsa
	User root
	Port 22522
```


