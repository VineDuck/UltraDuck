// Keyboard shortcuts
function initKeys(){
    function keyPress(e) {
        if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
            return false;
        }
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
            totalCount = hiddenCount + filteredCount;
            document.location.href = "/vine/vine-items?queue=potluck";
            break;
        case shortcuts.afa:
            totalCount = hiddenCount + filteredCount;
            document.location.href = "/vine/vine-items?queue=last_chance";
            break;
        case shortcuts.ai:
            totalCount = hiddenCount + filteredCount;
            document.location.href = "/vine/vine-items?queue=encore";
            break;
        case shortcuts.nextPage:
            totalCount = hiddenCount + filteredCount;
            document.querySelector("#vvp-items-grid-container>div>ul.a-pagination li:last-child a")?.click();
            break;
        case shortcuts.prevPage:
            totalCount = hiddenCount + filteredCount;
            document.querySelector("#vvp-items-grid-container>div>ul.a-pagination li:first-child a")?.click();
            break;
        case shortcuts.page1ai:
            totalCount = hiddenCount + filteredCount;
            document.location.href = "/vine/vine-items?queue=encore&page=1";
            break;
        case shortcuts.page2ai:
            totalCount = hiddenCount + filteredCount;
            document.location.href = "/vine/vine-items?queue=encore&page=2";
            break;
        case shortcuts.page3ai:
            totalCount = hiddenCount + filteredCount;
            document.location.href = "/vine/vine-items?queue=encore&page=3";
            break;
        case shortcuts.page4ai:
            totalCount = hiddenCount + filteredCount;
            document.location.href = "/vine/vine-items?queue=encore&page=4";
            break;
        case shortcuts.page5ai:
            totalCount = hiddenCount + filteredCount;
            document.location.href = "/vine/vine-items?queue=encore&page=5";
            break;
        case shortcuts.page6ai:
            totalCount = hiddenCount + filteredCount;
            document.location.href = "/vine/vine-items?queue=encore&page=6";
            break;
        case shortcuts.page7ai:
            totalCount = hiddenCount + filteredCount;
            document.location.href = "/vine/vine-items?queue=encore&page=7";
            break;
        case shortcuts.page8ai:
            totalCount = hiddenCount + filteredCount;
            document.location.href = "/vine/vine-items?queue=encore&page=8";
            break;
        case shortcuts.page9ai:
            totalCount = hiddenCount + filteredCount;
            document.location.href = "/vine/vine-items?queue=encore&page=9";
            break;
        case shortcuts.page10ai:
            totalCount = hiddenCount + filteredCount;
            document.location.href = "/vine/vine-items?queue=encore&page=10";
            break;
        }
    }
    document.addEventListener("keyup", keyPress, false);
}
