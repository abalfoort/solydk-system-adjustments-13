applet.currentConfigGroup = ["Shortcuts"]
applet.writeConfig("global", "Alt+F1")

applet.currentConfigGroup = ["General"]
applet.writeConfig("icon", "solydk")
applet.writeConfig("favoriteApps", ["preferred://browser","thunderbird.desktop","libreoffice-startcenter.desktop","org.kde.discover.desktop","systemsettings.desktop","org.kde.konsole.desktop"])
//applet.writeConfig("favoriteSystemActions", ["logout","reboot","shutdown"])
applet.writeConfig("limitDepth", true)
applet.writeConfig("alphaSort", true)

applet.reloadConfig();
