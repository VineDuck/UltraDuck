// ==UserScript==
// @name        UltraDuck
// @namespace   https://github.com/Jimbo5431/UltraDuck
// @run-at      document-start
// @match       https://www.amazon.co.uk/vine/vine-items*
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_addStyle
// @grant       GM_listValues
// @grant       GM_notification
// @require     ./deskthor.js
// @require     ./mobilethor.js
// @require     ./hideitems.js
// @require     ./keypress.js
// @require     ./quacker.js
// @version     0.05.1
// @description Hides items, auto refreshes, quacks and notifies.
// ==/UserScript==

// Which pages to refresh on
refresh_rfy = true;
refresh_afa = true;
refresh_ai = true;

// change to false to skip notifications.
show_notifications = true;
// control notifications for AI and AFA
show_notifications_on_ai = false;
show_notifications_on_afa = true;

// Refresh timings, in seconds
min_refresh_int = 3;
max_refresh_int = 8

shortcuts = {
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

// Add a style before the page loads to hide the product grid, to prevent the redraw being visible
GM_addStyle(`
#vvp-items-grid {
    display:none !important;
}

`);

document.onreadystatechange = function() {
    if (document.readyState !== "interactive")
        return false;
    
    // Captcha or something
    if (! document.getElementById('vvp-reviews-tab')) {
        // This is not the page you are looking for
        console.log ('Wrong page, aborting');
        alert_sound.play ();
        throw new Error("Possibly a captcha");
        return false;
    }

    queue = new URL(window.location).searchParams.get('queue')
    if (! queue)
        queue = "last_chance";

    // don't run on search page
    if (document.location.href.indexOf('search') >-1)
    {
        initKeys();
        initHideItemsUK();
        return false;
    }

    if (navigator.userAgent.includes('Mobile'))
        GM_addStyle(mobileCSS());
    else
        GM_addStyle(deskCSS());

    initHideItemsUK();
    initKeys();
    initQuacker();
}
