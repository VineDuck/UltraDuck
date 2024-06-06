// Keyboard shortcuts
function initKeys(){
    function keyPress(e) {
        let nodeName = document.activeElement.nodeName;
        let excl = ["INPUT", "TEXTAREA", "SELECT", "LI"];
        if (excl.indexOf(nodeName) != -1) {
            return false;
        }

        switch (e.key) {
        case shortcuts.hideAll:
            document.querySelectorAll(".vvp-item-tile:not(.hideVineItems-hideASIN) .hideVineItems-toggleASIN").forEach( (hideLink) => {hideLink.click();});
            break;
        case shortcuts.unhideAll:
            document.querySelectorAll(".vvp-item-tile.hideVineItems-hideASIN .hideVineItems-toggleASIN").forEach( (hideLink) => {hideLink.click();});
            break;
        case shortcuts.rfy:
            document.location.href = "/vine/vine-items?queue=potluck";
            break;
        case shortcuts.afa:
            document.location.href = "/vine/vine-items?queue=last_chance";
            break;
        case shortcuts.ai:
            document.location.href = "/vine/vine-items?queue=encore";
            break;
        case shortcuts.nextPage:
            document.querySelector("#vvp-items-grid-container>div>ul.a-pagination li:last-child a")?.click();
            break;
        case shortcuts.prevPage:
            document.querySelector("#vvp-items-grid-container>div>ul.a-pagination li:first-child a")?.click();
            break;
        case shortcuts.page1ai:
            document.location.href = "/vine/vine-items?queue=encore&page=1";
            break;
        case shortcuts.page2ai:
            document.location.href = "/vine/vine-items?queue=encore&page=2";
            break;
        case shortcuts.page3ai:
            document.location.href = "/vine/vine-items?queue=encore&page=3";
            break;
        case shortcuts.page4ai:
            document.location.href = "/vine/vine-items?queue=encore&page=4";
            break;
        case shortcuts.page5ai:
            document.location.href = "/vine/vine-items?queue=encore&page=5";
            break;
        case shortcuts.page6ai:
            document.location.href = "/vine/vine-items?queue=encore&page=6";
            break;
        case shortcuts.page7ai:
            document.location.href = "/vine/vine-items?queue=encore&page=7";
            break;
        case shortcuts.page8ai:
            document.location.href = "/vine/vine-items?queue=encore&page=8";
            break;
        case shortcuts.page9ai:
            document.location.href = "/vine/vine-items?queue=encore&page=9";
            break;
        case shortcuts.page10ai:
            document.location.href = "/vine/vine-items?queue=encore&page=10";
            break;
        }
    }
    document.addEventListener("keyup", keyPress, false);
}
