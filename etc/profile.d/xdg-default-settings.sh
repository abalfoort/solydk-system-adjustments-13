if [ -z "$XDG_CONFIG_DIRS" ]; then
    XDG_CONFIG_DIRS=/etc/xdg
fi  
export XDG_CONFIG_DIRS=/usr/share/solydxk/default-settings:$XDG_CONFIG_DIRS

if [ -z "$XDG_DATA_DIRS" ]; then
    XDG_DATA_DIRS=/usr/share:/usr/local/share
fi
export XDG_DATA_DIRS=/usr/share/solydxk/default-settings:$XDG_DATA_DIRS 
