#!/bin/sh

# Download unifont from https://unifoundry.com/pub/unifont/
# Unifont 15.0+ does not compile TTF
# Unpack and enter unifont dir
#make
#make BUILDFONT=1
# Font is placed in font/compiled/unifont-*.ttf

TTF="unifont-14.0.04/font/compiled/unifont-14.0.04.ttf"


if [ -z "$(which grub-mkfont)" ]; then
    echo "Install grub-common"
    exit
fi

grub-mkfont -v -s 20 -o unifont-regular-20.pf2 $TTF
grub-mkfont -v -s 20 -o unifont-bold-20.pf2 -b $TTF

echo
echo "Check license changes: https://unifoundry.com/LICENSE.txt"
echo
