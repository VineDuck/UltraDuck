// ==UserScript==
// @name        UltraDuck
// @namespace   UltraDuck
// @match       https://www.amazon.co.uk/vine/vine-items*
// @grant       GM.addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// @grant       GM_notification
// @require     include/keys.js
// @require     include/styles.js
// @require     include/hide.js
// @require     include/quacker.js
// @author      Jimbo
// @description Finds new items, and quacks
// @run-at      document-start
// @version     1.0.3
// ==/UserScript==

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

ultraDuckQuacker.showNotifications = true;
ultraDuckQuacker.showNotificationsOnAFA = true;
ultraDuckQuacker.showNotificationsOnAI = false;

ultraDuckStyle.applyThor();
ultraDuckStyle.applyStyles('#vvp-items-grid { display:none !important; }');

document.onreadystatechange = function() {
    if (document.readyState !== "interactive") {
        return false;
    }

    // Hit a snag
    if (! document.getElementById('vvp-reviews-tab')) {
        console.log('❗🦆 Hit an unexpected page, aborting 🦆❗');
        ultraDuckQuacker.stop;
        return false;
    }

    queue = new URL(window.location).searchParams.get('queue')
    if (! queue) {
        queue = "last_chance";
    }

    // don't run on search page
    if (document.location.href.indexOf('search') >-1) {
        initHideItemsUK();
        return false;
    }

    initHideItemsUK();
    window.addEventListener("blur", ultraDuckQuacker.run);
    window.addEventListener("focus", ultraDuckQuacker.pause);
    if(! document.hasFocus()) {
        ultraDuckQuacker.check();
        ultraDuckQuacker.run();
    }
}

