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
                return false;
            }

            // Page loaded fine, reset the Duck Stop
            if (GM_getValue('UltraDuckStop', false)) {
                GM_setValue('UltraDuckStop', false);
            }

            // Check if chrome audio is fixed
            if (!sessionStorage.getItem('ultraDuckClicked')) {
                if((ultraDuckQuacker.runOnAFA) && queue === 'last_chance') {
                    ultraDuckStyle.applyDuck();
                    return false;
                }
                else if ((ultraDuckQuacker.runOnAI) && queue === 'encore') {
                    ultraDuckStyle.applyDuck();
                    return false;
                }
                else if ((ultraDuckQuacker.runOnRFY) && queue === 'potluck') {
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
