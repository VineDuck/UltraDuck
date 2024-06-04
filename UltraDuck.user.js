// ==UserScript==
// @name        UltraDuck
// @namespace   https://github.com/Jimbo5431/UltraDuck
// @run-at      document-start
// @match       https://www.amazon.co.uk/vine/vine-items?queue=*
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_addStyle
// @grant       GM_listValues
// @grant       GM_notification
// @require     deskthor.js
// @require     mobilethor.js
// @require     hideitems.js
// @require     keypress.js
// @require     quacker.js
// @version     0.001
// @description Hides items, auto refreshes, quacks and notifies.
// ==/UserScript==

// Add a style before the page loads to hide the product grid, to prevent the redraw being visible
GM_addStyle(`
#vvp-items-grid {
  display:none !important;
}

`);

document.onreadystatechange = function() {
    if (document.readyState !== "interactive")
        return false;

    initHideItemsUK();
    initKeys();
    if (navigator.userAgent.includes('Mobile'))
        GM_addStyle(mobileCSS());
    else
        GM_addStyle(deskCSS());
    initQuacker();
}
