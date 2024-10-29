class ultraDuck {
    static startTimeout = setTimeout(function() {document.location.reload(true)}, 60000);

    static startUp() {
        // Catch any broken page loads hopefully
        console.log('🦆 Starting page load check 🦆');

        // Now wait until the page is rendered
        document.onreadystatechange = function() {
            if (document.readyState !== "interactive") {
                return false;
            }

            console.log('🦆 Clearing page load check 🦆');
            clearTimeout(ultraDuck.startTimeout);

            ultraDuckQuacker.originalTitle = document.title;

            // Hit a snag, probably a Captcha or error page
            if (! document.getElementById('vvp-reviews-tab')) {
                ultraDuckQuacker.honk();
                // Check for error, refresh after 10 seconds
                if ((document.querySelector("div.a-alert-error") != null) || (document.querySelector("#vvp-fetch-account-error-alert") != null)) {
                    console.log('🦆⛔ Error page, refreshing in 10 seconds ⛔🦆');
                    setTimeout(function(){
                        let href = new URL(window.location.href);
                        window.location.assign(href.toString());
                    }, 10000);
                }
                return false;
            }

            // Page loaded fine, reset the Duck Stop
            if (GM_getValue('UltraDuckStop', false)) {
                GM_setValue('UltraDuckStop', false);
            }

            // Check if chrome audio is fixed
            if (!sessionStorage.getItem('ultraDuckClicked')) {
                if(ultraDuckQuacker.runCheck()) {
                    ultraDuckHider.cleanItems();
                    ultraDuckStyle.applyDuck();
                    return false;
                }
            }

            // Continue with start up
            ultraDuck.startUp2();
        }
    }

    static startUp2() {
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
}
