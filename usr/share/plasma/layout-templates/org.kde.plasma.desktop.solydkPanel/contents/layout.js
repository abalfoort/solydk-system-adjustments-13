// https://develop.kde.org/docs/plasma/scripting/

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
simplemenu.writeConfig("global", "Alt+F1")

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
showdt.currentConfigGroup = ["Shortcuts"]
showdt.writeConfig("global", "Alt+D")
showdt.currentConfigGroup = ["General"]
showdt.writeConfig("icon", "folder-desktop") 

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

// Add keyboardlayout
panel.addWidget("org.kde.plasma.keyboardlayout")

/* Next up is determining whether to add the Input Method Panel
 * widget to the panel or not. This is done based on whether
 * the system locale's language id is a member of the following
 * white list of languages which are known to pull in one of
 * our supported IME backends when chosen during installation
 * of common distributions. */

var langIds = ["as",    // Assamese
               "bn",    // Bengali
               "bo",    // Tibetan
               "brx",   // Bodo
               "doi",   // Dogri
               "gu",    // Gujarati
               "hi",    // Hindi
               "ja",    // Japanese
               "kn",    // Kannada
               "ko",    // Korean
               "kok",   // Konkani
               "ks",    // Kashmiri
               "lep",   // Lepcha
               "mai",   // Maithili
               "ml",    // Malayalam
               "mni",   // Manipuri
               "mr",    // Marathi
               "ne",    // Nepali
               "or",    // Odia
               "pa",    // Punjabi
               "sa",    // Sanskrit
               "sat",   // Santali
               "sd",    // Sindhi
               "si",    // Sinhala
               "ta",    // Tamil
               "te",    // Telugu
               "th",    // Thai
               "ur",    // Urdu
               "vi",    // Vietnamese
               "zh_CN", // Simplified Chinese
               "zh_TW"] // Traditional Chinese

if (langIds.indexOf(languageId) != -1) {
    panel.addWidget("org.kde.plasma.kimpanel");
}

// Add the clock
var clock = panel.addWidget("org.kde.plasma.digitalclock")
clock.writeConfig("showDate", false)
clock.writeConfig("showWeekNumbers", true)
clock.writeConfig("use24hFormat", "2")
