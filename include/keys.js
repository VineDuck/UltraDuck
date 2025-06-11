class ultraDuckKeys {
    static useKeys = true;
    static shortcuts = {
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

    static keypress(e) {
        if (!ultraDuckKeys.useKeys)
            return false;
        if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
            return false;
        }
        let nodeName = document.activeElement.nodeName;
        let excl = ["INPUT", "TEXTAREA", "SELECT", "LI"];
        if (excl.indexOf(nodeName) != -1) {
            return false;
        }
        switch(e.key) {
            case ultraDuckKeys.shortcuts.hideAll:
                document.querySelectorAll(".vvp-item-tile:not(.hideVineItems-hideASIN) .hideVineItems-toggleASIN").forEach( (hideLink) => {hideLink.click();});
                break;
            case ultraDuckKeys.shortcuts.unhideAll:
                document.querySelectorAll(".vvp-item-tile.hideVineItems-hideASIN .hideVineItems-toggleASIN").forEach( (hideLink) => {hideLink.click();});
                break;
            case ultraDuckKeys.shortcuts.rfy:
                ultraDuckQuacker.stop();
                document.location.href = "/vine/vine-items?queue=potluck";
                break;
            case ultraDuckKeys.shortcuts.afa:
                ultraDuckQuacker.stop();
                document.location.href = "/vine/vine-items?queue=last_chance";
                break;
            case ultraDuckKeys.shortcuts.ai:
                ultraDuckQuacker.stop();
                document.location.href = "/vine/vine-items?queue=encore";
                break;
            case ultraDuckKeys.shortcuts.nextPage:
                ultraDuckQuacker.stop();
                document.querySelector("#vvp-items-grid-container > nav > ul > li.a-last > a")?.click();
                break;
            case ultraDuckKeys.shortcuts.prevPage:
                ultraDuckQuacker.stop();
                document.querySelector("#vvp-items-grid-container > nav > ul > li:nth-child(1) > a")?.click();
                break;
            case ultraDuckKeys.shortcuts.page1ai:
                ultraDuckQuacker.stop();
                document.location.href = "/vine/vine-items?queue=encore&page=1";
                break;
            case ultraDuckKeys.shortcuts.page2ai:
                ultraDuckQuacker.stop();
                document.location.href = "/vine/vine-items?queue=encore&page=2";
                break;
            case ultraDuckKeys.shortcuts.page3ai:
                ultraDuckQuacker.stop();
                document.location.href = "/vine/vine-items?queue=encore&page=3";
                break;
            case ultraDuckKeys.shortcuts.page4ai:
                ultraDuckQuacker.stop();
                document.location.href = "/vine/vine-items?queue=encore&page=4";
                break;
            case ultraDuckKeys.shortcuts.page5ai:
                ultraDuckQuacker.stop();
                document.location.href = "/vine/vine-items?queue=encore&page=5";
                break;
            case ultraDuckKeys.shortcuts.page6ai:
                ultraDuckQuacker.stop();
                document.location.href = "/vine/vine-items?queue=encore&page=6";
                break;
            case ultraDuckKeys.shortcuts.page7ai:
                ultraDuckQuacker.stop();
                document.location.href = "/vine/vine-items?queue=encore&page=7";
                break;
            case ultraDuckKeys.shortcuts.page8ai:
                ultraDuckQuacker.stop();
                document.location.href = "/vine/vine-items?queue=encore&page=8";
                break;
            case ultraDuckKeys.shortcuts.page9ai:
                ultraDuckQuacker.stop();
                document.location.href = "/vine/vine-items?queue=encore&page=9";
                break;
            case ultraDuckKeys.shortcuts.page10ai:
                ultraDuckQuacker.stop();
                document.location.href = "/vine/vine-items?queue=encore&page=10";
                break;
        }
    }
}

document.addEventListener("keyup", ultraDuckKeys.keypress);
