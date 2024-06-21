// ==UserScript==
// @name        UltraDuck
// @namespace   UltraDuck
// @match       https://www.amazon.co.uk/vine/vine-items*
// @grant       GM.addStyle
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// @grant       GM_notification
// @grant       GM_registerMenuCommand
// @require     include/monkeyconfig.js
// @require     include/keys.js
// @require     include/styles.js
// @require     include/hide.js
// @require     include/quacker.js
// @require     include/settings.js
// @author      Jimbo
// @description Finds new items, and quacks
// @run-at      document-start
// @version     1.1.0.8
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
// Apply thorvarium styles
ultraDuckStyle.applyThor();
// Hide items grid to prevent flicker
ultraDuckStyle.applyStyles('#vvp-items-grid { display:none !important; }');

// Now wait until the page is rendered
document.onreadystatechange = function() {
    if (document.readyState !== "interactive") {
        return false;
    }

    ultraDuckQuacker.originalTitle = document.title;

    // Hit a snag, probably a Captcha or error page
    if (! document.getElementById('vvp-reviews-tab')) {
        ultraDuckQuacker.honk();
        return false;
    }

    // Page loaded fine, reset the Duck Stop
    if (GM_getValue('UltraDuckStop', false)) {
        GM_setValue('UltraDuckStop', false);
    }

    // Check what page we're on
    queue = new URL(window.location).searchParams.get('queue')
    if (! queue) {
        queue = "last_chance";
    }

    // Only run hide-items on exluded pages
    if (! ultraDuckQuacker.runCheck()) {
        initHideItemsUK();
        return false;
    }

    // Run hide-items
    initHideItemsUK();

    // Register the focus/unfocus events
    window.addEventListener("blur", ultraDuckQuacker.run);
    window.addEventListener("focus", ultraDuckQuacker.pause);

    // Only run the check on a new page if it does not have focus, otherwise the user refreshed it manually.
    if(! document.hasFocus()) {
        ultraDuckQuacker.check();
        ultraDuckQuacker.run();
    }
}
