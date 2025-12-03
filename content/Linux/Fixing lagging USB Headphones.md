When receiving messages like this:

```shell
Bluetooth: hci0: ACL packet for unknown connection handle 256
```

Create `/etc/modprobe.d/disable_btusb_autosuspend.conf` with following content:

```shell
# Disable autosuspend for btusb to make the bluetooth keyboard work again
options btusb enable_autosuspend=n
```

Then run 

```shell
mkinitcpio -P
```

Reboot and debug with 

```shell
$ systool -v -m btusb | grep autosuspend
	enable_autosuspend = "N" # should be "N"
```

## Also

- That could be either `btusb.enable_autosuspend=n` or `usbcore.autosuspend=-1`
- TLP has settings for BTUSB, check it to exclude your device from autosuspend
- There's a guy on ubuntuforums, who wrote [solution](https://ubuntuforums.org/showthread.php?t=2159645&page=6&p=12926730#post12926730), which disables autosuspend manually

## Refs

- [Bluetooth keyboard disconnects randomly](https://bbs.archlinux.org/viewtopic.php?id=236479)
- [Bluetooth keeps turning off](https://bbs.archlinux.org/viewtopic.php?id=275962)
- [ArchWiki: Device connects, then disconnects after a few moments](https://wiki.archlinux.org/title/Bluetooth#Device_connects,_then_disconnects_after_a_few_moments)
- [Said solution with a script in rc.local](https://ubuntuforums.org/showthread.php?t=2159645&page=6&p=12926730#post12926730)
