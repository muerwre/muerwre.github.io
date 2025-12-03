## Installing Linux with DualBoot alongside Windows 11 

- [Disable BitLocker in Windows](https://www.asus.com/support/FAQ/1047461/), don't forget to backup your key
- [Shrink system partition](https://www.asus.com/me-en/support/FAQ/1044688/#Win11)
- Disable Secure Boot in Bios:
	- Pressing F2 while booting
	- Then F7 in bios
	- Select "Security" -> "Secure Boot" -> Disable. 
	- Press F10 to save and reboot
- Boot in windows, check that everything's wotking
- Burn image with [rufus](https://rufus.ie/), reboot, press F2, choose your USB drive as first boot option

## Getting bluetooth working with Mediatek 7921e

**Problem**: WiFi is working on Zenbook UM3402-YA, but bluetooth doesn't.

According to this [answer](https://www.linux.org/threads/solved-wifi-adaptator-not-found-mediatek-wi-fi-6-mt7921-wireless-lan-card.37699/page-2#post-143291) you should just turn your laptop off, disconnect power supply and ==hold power key for 60 seconds==. 

After that press Power key again and wait for about 10-20sec for asus logo to appear. Then ==press F2 and disable secure boot again==, that's the necessary part.

## Power usage optimizations

- Install `tlp` and enable it with `systemctl enable --now tlp` 