class ultraDuckQuacker {
    static quackSound = new Audio ('https://github.com/Jimbo5431/UltraDuck/raw/main/quack.mp3');
    static quackImage = 'https://raw.githubusercontent.com/Jimbo5431/UltraDuck/main/rubber-duck.png';
    static minRefresh = 3000; // 3 Seconds
    static maxRefresh = 10000; // 10 Seconds
    static delay = Math.floor(Math.random () * (ultraDuckQuacker.maxRefresh - ultraDuckQuacker.minRefresh)) + ultraDuckQuacker.minRefresh;
    static refreshTimer = null;
    static allStop = false;
    static hiddenCount = 0;
    static filteredCount = 0;
    static totalCount = 0;

    static quack() {
        ultraDuckQuacker.stop();
        console.log('🛑 🦆 Quack! 🦆 🛑');
        ultraDuckQuacker.quackSound.play();
    }

    static run() {
        console.log('💨🦆 Duck is running 🦆💨');
        ultraDuckQuacker.refresh();
    }

    static pause() {
        console.log('⏸🦆 Duck is paused 🦆⏸');
        if(ultraDuckQuacker.refreshTimer !== null) {
            console.log('🛑 🦆 Refresh stopped 🦆 🛑');
            clearTimeout(ultraDuckQuacker.refreshTimer);
        }
    }

    static stop() {
        console.log('🛑 🦆 Stopping 🦆 🛑');
        ultraDuckQuacker.allStop = true;
        if(ultraDuckQuacker.refreshTimer !== null) {
            console.log('🛑 🦆 Refresh stopped 🦆 🛑');
            clearTimeout(ultraDuckQuacker.refreshTimer);
        }
        window.removeEventListener('blur', ultraDuckQuacker.run);
        window.removeEventListener('focus', ultraDuckQuacker.pause);
    }

    static refresh() {
        if(ultraDuckQuacker.allStop) {
            console.log('🦆 Ignoring refresh, page stopped 🦆');
            return false;
        }
        ultraDuckQuacker.refreshTimer = setTimeout(function() {window.location.reload()}, ultraDuckQuacker.delay);
        console.log('🦆 Refresh timer: ' + ultraDuckQuacker.delay + 'ms 🦆');
    }

    static check() {
        if(ultraDuckQuacker.allStop) {
            console.log('🦆 Ignoring check, page stopped 🦆');
            return false;
        }
        // do check stuff;
        console.log('🦆 Running check 🦆');
        console.log('🦆 Count: ' + (ultraDuckQuacker.hiddenCount + ultraDuckQuacker.filteredCount) + " / " + ultraDuckQuacker.totalCount);
        if ((ultraDuckQuacker.hiddenCount + ultraDuckQuacker.filteredCount) === ultraDuckQuacker.totalCount) {
            return true;
        }
        console.log('🦆 Found one 🦆');
        ultraDuckQuacker.quack();
    }
}
