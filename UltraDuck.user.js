// ==UserScript==
// @name        UltraDuck
// @namespace   UltraDuck
// @match       https://www.amazon.co.uk/vine/vine-items*
// @exclude     https://www.amazon.co.uk/vine/vine-items?queue=encore#monitor
// @grant       GM.addStyle
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// @grant       GM_notification
// @grant       GM_registerMenuCommand
// @grant       GM.xmlHttpRequest
// @require     include/monkeyconfig.js
// @require     include/keys.js
// @require     include/styles.js
// @require     include/hide.js
// @require     include/quacker.js
// @require     include/settings.js
// @require     include/ultraduck.js
// @author      Jimbo
// @description Finds new items, and quacks
// @run-at      document-start
// @version     1.1.2.6
// @icon        https://raw.githubusercontent.com/VineDuck/UltraDuck/main/rubber-duck.png
// ==/UserScript==

ultraDuckSettings.getSettings();

// To change keyboard shortcuts, use ultraDuckKeys.shortcuts
ultraDuckKeys.shortcuts = {
    "rfy":          "r",
    "afa":          "a",
    "ai":           "i",
    "nextPage":     "n",
    "prevPage":     "p",
    "hideAll":      "h",
    "unhideAll":    "s",
    "page1ai":      "1",
    "page2ai":      "2",
    "page3ai":      "3",
    "page4ai":      "4",
    "page5ai":      "5",
    "page6ai":      "6",
    "page7ai":      "7",
    "page8ai":      "8",
    "page9ai":      "9",
    "page10ai":     "0",
};

//--------------------- Start script ---------------------//
// Hide items grid to prevent flicker
ultraDuckStyle.applyStyles('#vvp-items-grid { display:none !important; }');

// Apply thorvarium styles
ultraDuckStyle.applyThor();

// Check what page we're on
queue = new URL(window.location).searchParams.get('queue')
if (! queue) {
    queue = "last_chance";
}

ultraDuck.startUp();
