// Keyboard shortcuts
function initKeys(){
    function keyPress(e) {
        let nodeName = document.activeElement.nodeName;
        let excl = ["INPUT", "TEXTAREA", "SELECT", "LI"];
        if (excl.indexOf(nodeName) != -1) {
            return false;
        }

        switch (e.key) {
        case "h":
            document.querySelectorAll(".vvp-item-tile:not(.hideVineItems-hideASIN) .hideVineItems-toggleASIN").forEach( (hideLink) => {hideLink.click();});
            break;
        case "s":
            document.querySelectorAll(".vvp-item-tile.hideVineItems-hideASIN .hideVineItems-toggleASIN").forEach( (hideLink) => {hideLink.click();});
            break;
        case "r":
            document.location.href = "/vine/vine-items?queue=potluck";
            break;
        case "a":
            document.location.href = "/vine/vine-items?queue=last_chance";
            break;
        case "i":
            document.location.href = "/vine/vine-items?queue=encore";
            break;
        case "n":
            document.querySelector("#vvp-items-grid-container>div>ul.a-pagination li:last-child a")?.click();
            break;
        case "p":
            document.querySelector("#vvp-items-grid-container>div>ul.a-pagination li:first-child a")?.click();
            break;
        case "1":
            document.location.href = "/vine/vine-items?queue=encore&page=1";
            break;
        case "2":
            document.location.href = "/vine/vine-items?queue=encore&page=2";
            break;
        case "3":
            document.location.href = "/vine/vine-items?queue=encore&page=3";
            break;
        case "4":
            document.location.href = "/vine/vine-items?queue=encore&page=4";
            break;
        case "5":
            document.location.href = "/vine/vine-items?queue=encore&page=5";
            break;
        case "6":
            document.location.href = "/vine/vine-items?queue=encore&page=6";
            break;
        case "7":
            document.location.href = "/vine/vine-items?queue=encore&page=7";
            break;
        case "8":
            document.location.href = "/vine/vine-items?queue=encore&page=8";
            break;
        case "9":
            document.location.href = "/vine/vine-items?queue=encore&page=9";
            break;
        case "0":
            document.location.href = "/vine/vine-items?queue=encore&page=10";
            break;
        }
    }
    document.addEventListener("keyup", keyPress, false);
}
