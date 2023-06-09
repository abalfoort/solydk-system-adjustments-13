applet.currentConfigGroup = ["Shortcuts"]
applet.writeConfig("global", "Meta+F1")

applet.currentConfigGroup = ["General"]
applet.writeConfig("icon", "solydk")
applet.writeConfig("favorites", ["preferred://browser","thunderbird.desktop","libreoffice-startcenter.desktop","org.kde.discover.desktop","systemsettings.desktop","org.kde.konsole.desktop"])
applet.writeConfig("alphaSort", true)

applet.reloadConfig();
