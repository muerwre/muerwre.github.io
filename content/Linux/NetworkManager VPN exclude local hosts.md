For network manager to exclude specific hosts from routing through all VPN connections, create file
`/etc/NetworkManager/dispatcher.d/99-exclude` with contents:

```bash
#!/bin/bash

INTERFACE=$1
ACTION=$2

case "$ACTION" in
    vpn-up)
        route add -host example.org gw 192.168.1.1
        ;;
    vpn-down)
        route del -host example.org gw 192.168.1.1
        ;;
esac
```
