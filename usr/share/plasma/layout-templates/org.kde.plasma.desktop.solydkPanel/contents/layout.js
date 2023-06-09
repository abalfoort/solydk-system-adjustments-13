// https://userbase.kde.org/KDE_System_Administration/PlasmaDesktopScripting

var panel = new Panel
var panelScreen = panel.screen
var freeEdges = {"bottom": true, "top": true, "left": true, "right": true}

for (i = 0; i < panelIds.length; ++i) {
    var tmpPanel = panelById(panelIds[i])
    if (tmpPanel.screen == panelScreen) {
        // Ignore the new panel
        if (tmpPanel.id != panel.id) {
            freeEdges[tmpPanel.location] = false;
        }
    }
}

if (freeEdges["bottom"] == true) {
    panel.location = "bottom";
} else if (freeEdges["top"] == true) {
    panel.location = "top";
} else if (freeEdges["left"] == true) {
    panel.location = "left";
} else if (freeEdges["right"] == true) {
    panel.location = "right";
} else {
    // There is no free edge, so leave the default value
    panel.location = "top";
}

// Set panel height
panel.height = 42

// Create start menu
var simplemenu = panel.addWidget("org.kde.plasma.kicker")
simplemenu.currentConfigGroup = ["Shortcuts"]
simplemenu.writeConfig("global", "Meta+F1")

simplemenu.writeConfig("icon", "solydk")
simplemenu.writeConfig("favoriteApps", [
    'preferred://browser',
    'thunderbird.desktop',
    'libreoffice-startcenter.desktop',
    'org.kde.discover.desktop',
    'systemsettings.desktop',
    'org.kde.konsole.desktop'
])
simplemenu.writeConfig("limitDepth", true)
simplemenu.writeConfig("alphaSort", true)

// Add show desktop
var showdt = panel.addWidget("org.kde.plasma.showdesktop")

// Add dolphin
var icon = panel.addWidget("org.kde.plasma.icon")
icon.writeConfig("url", ["file:///usr/share/applications/org.kde.dolphin.desktop"])

// Add taskmanager
var task = panel.addWidget("org.kde.plasma.taskmanager")
task.writeConfig("launchers", [])
task.writeConfig("showOnlyCurrentDesktop", true)
task.writeConfig("groupingStrategy", "0")
task.writeConfig("maxStripes", "1")
task.writeConfig("showOnlyCurrentActivity", true)
task.writeConfig("showOnlyCurrentDesktop", true)
task.writeConfig("sortingStrategy", "1")

// Add system tray
var systray = panel.addWidget("org.kde.plasma.systemtray")
var systrayContainmentId = systray.readConfig("SystrayContainmentId")
var systrayContainment = desktopById(systrayContainmentId)
systrayContainment.writeConfig("extraItems", [
    'org.kde.plasma.volume',
    'org.kde.plasma.devicenotifier',
    'org.kde.plasma.networkmanagement',
    'org.kde.discovernotifier',
    'org.kde.plasma.diskquota',
    'org.kde.plasma.bluetooth',
    'org.kde.plasma.clipboard',
    'org.kde.plasma.printmanager',
    'org.kde.plasma.battery'
])
systrayContainment.writeConfig("hiddenItems",["org.kde.plasma.clipboard"])

// Add notifications
panel.addWidget("org.kde.plasma.notifications")

// Add the clock
var clock = panel.addWidget("org.kde.plasma.digitalclock")
clock.writeConfig("showDate", false)
clock.writeConfig("showWeekNumbers", true)
clock.writeConfig("use24hFormat", "2")
