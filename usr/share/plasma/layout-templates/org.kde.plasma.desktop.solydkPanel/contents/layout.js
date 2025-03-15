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
// For an Icons-Only Task Manager on the bottom, *3 is too much, *2 is too little
// Round down to next highest even number since the Panel size widget only displays
// even numbers
panel.height = 2 * Math.floor(gridUnit * 2.2 / 2)

// Restrict horizontal panel to a maximum size of a 21:9 monitor
const maximumAspectRatio = 21/9;
if (panel.formFactor === "horizontal") {
    const geo = screenGeometry(panelScreen);
    const maximumWidth = Math.ceil(geo.height * maximumAspectRatio);

    if (geo.width > maximumWidth) {
        panel.alignment = "center";
        panel.minimumLength = maximumWidth;
        panel.maximumLength = maximumWidth;
    }
}

// Create start menu
// https://develop.kde.org/docs/plasma/scripting/keys/
var kicker = panel.addWidget("org.kde.plasma.kicker")
kicker.currentConfigGroup = ["Shortcuts"]
kicker.writeConfig("global", "Alt+F1")
kicker.writeConfig("icon", "solydk")
kicker.writeConfig("favoriteApps", [
    "preferred://browser",
    "preferred://mailer",
    "applications:libreoffice-startcenter.desktop",
    "applications:org.kde.discover.desktop",
    "applications:systemsettings.desktop",
    "preferred://terminal"
])
kicker.writeConfig("alignResultsToBottom", true)
kicker.writeConfig("alphaSort", true)

//var kickoff = panel.addWidget("org.kde.plasma.kickoff")
//kickoff.currentConfigGroup = ["Shortcuts"]
//kickoff.writeConfig("global", "Alt+F1")
//kickoff.writeConfig("icon", "solydk")
//kickoff.writeConfig("favorites", [
//    "preferred://browser",
//    "preferred://mailer",
//    "applications:libreoffice-startcenter.desktop",d
//    "applications:org.kde.discover.desktop",
//    "applications:systemsettings.desktop",
//    "preferred://terminal"
//])
//kickoff.writeConfig("favoritesDisplay", 1)
//kickoff.writeConfig("alphaSort", true)
//kickoff.writeConfig("showActionButtonCaptions", false)
//kickoff.writeConfig("switchCategoryOnHover", true)

// Add show desktop
var showdt = panel.addWidget("org.kde.plasma.showdesktop")
showdt.currentConfigGroup = ["Shortcuts"]
showdt.writeConfig("global", "Alt+D")
//showdt.currentConfigGroup = ["General"]
//showdt.writeConfig("icon", "folder-desktop") 

// Add dolphin
//var icon = panel.addWidget("org.kde.plasma.icon")
//icon.writeConfig("url", ["file:///usr/share/applications/org.kde.dolphin.desktop"])

// Add taskmanager
var task = panel.addWidget("org.kde.plasma.taskmanager")
task.writeConfig("launchers", ["preferred://filemanager"])
task.writeConfig("showOnlyCurrentDesktop", true)
task.writeConfig("showOnlyCurrentActivity", true)
task.writeConfig("groupingStrategy", "0")
task.writeConfig("maxStripes", "1")
task.writeConfig("sortingStrategy", "1")

// Add system tray
var systray = panel.addWidget("org.kde.plasma.systemtray")
var systrayContainmentId = systray.readConfig("SystrayContainmentId")
var systrayContainment = desktopById(systrayContainmentId)
systrayContainment.writeConfig("scaleIconsToFit", true)
systrayContainment.writeConfig("extraItems", [
    "org.kde.plasma.volume",
    "org.kde.plasma.devicenotifier",
    "org.kde.plasma.networkmanagement",
    "org.kde.discovernotifier",
    "org.kde.plasma.diskquota",
    "org.kde.plasma.bluetooth",
    "org.kde.plasma.clipboard",
    "org.kde.plasma.printmanager",
    "org.kde.plasma.battery",
    "org.kde.plasma.keyboardlayout",
    "org.kde.plasma.brightness",
    "org.kde.plasma.kdeconnect",
    "org.kde.plasma.vault",
    "Fcitx"
])
systrayContainment.writeConfig("hiddenItems",[
    "org.kde.plasma.brightness",
    "org.kde.plasma.vault",
    "org.kde.plasma.keyboardlayout",
    "Fcitx"
])

// Add notifications
//panel.addWidget("org.kde.plasma.notifications")

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
