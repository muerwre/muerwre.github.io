To configure Logitech mice hotkeys under linux, use [solaar](https://github.com/pwr-Solaar/Solaar?tab=readme-ov-file) app,
and for it to work properly with gnome under wayland, according to their [manual](https://pwr-solaar.github.io/Solaar/rules/),
use:

- [gnome-shell extension](https://extensions.gnome.org/extension/6162/solaar-extension)
- [udev rule](https://raw.githubusercontent.com/pwr-Solaar/Solaar/master/rules.d-uinput/42-logitech-unify-permissions.rules), that
should be placed in `/etc/udev/rules.d`.

My rules to switch desktops with mouse buttons are:

1. Key: Forward Button (0056), Key press: Super_L + Alt_L + Left
2. Key: Back Button (0053), Key press: Super_L + Alt_L + Right