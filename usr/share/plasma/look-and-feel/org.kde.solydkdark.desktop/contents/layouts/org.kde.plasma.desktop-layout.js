// Load custom panel
loadTemplate("org.kde.plasma.desktop.solydkPanel")

// Get an array with all available destktops
var desktopsArray = desktopsForActivity(currentActivity())

// Loop through the desktops and set properties
for (var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.image'
    //desktopsArray[j].currentConfigGroup = new Array ("Wallpaper", "org.kde.image", "General")
    //desktopsArray[j].writeConfig("Image", "file:///usr/share/desktop-base/solydk-dark-theme/wallpaper/contents/images/1920x1080.svg")
    //desktopsArray[j].writeConfig("FillMode", 2)
    desktopsArray[j].currentConfigGroup = new Array("General")
    desktopsArray[j].writeConfig("pressToMove",true)
    desktopsArray[j].writeConfig("showToolbox",false)
    desktopsArray[j].writeConfig("popups",false)
    desktopsArray[j].writeConfig("selectionMarkers",false)
    desktopsArray[j].writeConfig("sortMode","-1")
    desktopsArray[j].writeConfig("arrangement", "1")
}
