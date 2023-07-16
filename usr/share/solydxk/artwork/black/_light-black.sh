#!/bin/bash

sed -i 's/#8eb6c9/#000000/g' *.svg
sed -i 's/#ffffff/#1a1a1a/g' *.svg
sed -i 's/#7eacc1/#1a1a1a/g' *.svg

#Logo
sed -i 's/#009bd4/#1a1a1a/g' *.svg
sed -i 's/#666666/#000000/g' *.svg
sed -i 's/#66666678/#000000ff/g' *.svg
sed -i 's/#33c6ff/#262626/g' *.svg

echo "Manually set fonts to 4d4d4dff"

