# My Hypr Dotfiles
### This is based on Hyprdots/HyDE project. Show them some love
Installing HyDE after minimal archinstall installs conflicting network managers which can cause disconnects. 
Run this to fix that

```
sudo systemctl disable --now iwd.service
sudo pacman -R iwd
sudo systemctl restart NetworkManager.service
```
You need to reboot after that
![screenshot](https://github.com/notquitethereyet/dotfiles/blob/main/hyprdots.png?raw=true)
