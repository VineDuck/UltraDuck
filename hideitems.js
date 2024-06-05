// https://github.com/MD2K23/VineToolsUK
// Hide Vine Items UK

function initHideItemsUK() {
    
    // Catch empty RFY
    if(queue === "potluck" && document.querySelector(".vvp-no-offers-msg")){
        return false;
    }

    //Define variables for later use
    hiddenCount = 0;
    filteredCount = 0;
    totalCount = 0;
    const bgcolour=window.getComputedStyle(document.body).getPropertyValue('background-color');
    console.log(bgcolour);
    const textcolour=window.getComputedStyle(document.body).getPropertyValue('color');

    // Hide/Unhide Symbols
    var hideSymbol="data:image/png;base64,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";
    var unhideSymbol="data:image/png;base64,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";
    var filterSymbol="data:image/png;base64,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";
    var unfilterSymbol="data:image/png;base64,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";
    var highlightSymbol="data:image/png;base64,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";
    var unhighlightSymbol="data:image/png;base64,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";

    //Create the HTML elements to display on the Amazon Vine page
    var messageSpan = document.createElement("span");
    messageSpan.innerHTML = `
    <span id="hideVineItems-count"></span>
    <span class="bullet">&#x2022</span>
    <span id="hideVineItems-toggleText">Show hidden</span>
    <label class="switch"><input id="hideVineItems-togglePage" type="checkbox" autocomplete="off"><span class="slider round"></span></label><br>
    <a id="hideVineItems-hideAll">Hide all</a>
    <span class="bullet">&#x2022</span>
    <a id="hideVineItems-unhideAll">Show all</a>
    <span class="bullet">&#x2022</span>
    <span class="dropdown">
      <a id="hideVineItems-filtersMenu">Filters</a>
      <div class="dropdown-content">
      <a id="hideVineItems-filterText">Hide Keyword / Phrase</a>
      <a id="hideVineItems-unfilterText">Unhide Keyword / Phrase</a>
      <hr>
      <a id="hideVineItems-highlightText">Highlight Keyword / Phrase</a>
      <a id="hideVineItems-unhighlightText">Unhighlight Keyword / Phrase</a>
      </div>
    </span>
    <br /><br />
    `;

    messageSpan.querySelector("#hideVineItems-togglePage").addEventListener("change", toggleHidden)
    messageSpan.querySelector("#hideVineItems-hideAll").addEventListener("click", (e) => {document.querySelectorAll(".vvp-item-tile:not(.hideVineItems-hideASIN) .hideVineItems-toggleASIN").forEach( (hideLink) => {hideLink.click();})});
    messageSpan.querySelector("#hideVineItems-unhideAll").addEventListener("click", (e) => {document.querySelectorAll(".vvp-item-tile.hideVineItems-hideASIN .hideVineItems-toggleASIN").forEach( (hideLink) => {hideLink.click();})});
    messageSpan.querySelector("#hideVineItems-filterText").addEventListener("click", function() {displayaddPopup("FILTERS")});
    messageSpan.querySelector("#hideVineItems-unfilterText").addEventListener("click", function() {displayremovePopup("FILTERS")});
    messageSpan.querySelector("#hideVineItems-highlightText").addEventListener("click", function () {displayaddPopup("HIGHLIGHTS")});
    messageSpan.querySelector("#hideVineItems-unhighlightText").addEventListener("click", function() {displayremovePopup("HIGHLIGHTS")});
    messageSpan.querySelector("#hideVineItems-filtersMenu").addEventListener("click", (e) => {document.querySelectorAll(".dropdown .dropdown-content").forEach( (tile) => {tile.classList.toggle("dropdown-click");})});
    document.querySelector("#vvp-items-grid-container > p").append(messageSpan);

    // Function to toggle hidden item status
    function toggleHidden(){
        if (document.querySelector("#hideVineItems-togglePage").checked == true){
            document.querySelector(":root").classList.add("hideVineItems-showHidden");
        } else {
            document.querySelector(":root").classList.remove("hideVineItems-showHidden");
        }
    }

    //Function to display a text entry box to allow the user to create a keyword filter
    function displayaddPopup(filtertype){
        document.querySelectorAll(".dropdown .dropdown-content").forEach( (tile) => {tile.classList.remove("dropdown-click");})
        var response=prompt("Enter a keyword, phrase or regular expression","");
        if (!(response == null )){
            if (response.length > 0){
                var newFilters = [];
                var savedFilters=JSON.parse(GM_getValue(filtertype+":",null));
                if (savedFilters != null){
                    savedFilters.forEach((filter) => {newFilters.push(filter)});
                }
                newFilters.push(response);
                GM_setValue(filtertype+":", JSON.stringify(newFilters));
                location.reload();
            }
        }
    }

    //Function to display a text entry box to allow the user to remove a keyword filter
    function displayremovePopup(filtertype){
        document.querySelectorAll(".dropdown .dropdown-content").forEach( (tile) => {tile.classList.remove("dropdown-click");})
        var numberedFilters=JSON.parse(GM_getValue(filtertype+":"));
        var originalFilters=numberedFilters.slice()
        if (numberedFilters.length > 0){
            // Initialize the start and end indices of the current batch of items
            var start = 0;
            var end = 20;
            // Use a loop to keep displaying the items until the user cancels or deletes all items
            while (numberedFilters.length > 0) {
                // Adjust the end index if it exceeds the length of the array
                if (end > numberedFilters.length) {
                    end = numberedFilters.length;
                }
                if (start < numberedFilters.length) {
                    // Display the current batch of items to the user in a prompt dialog
                    var message = "Enter the number of the item to remove, or type 'more' or 'm' to show more:\r\n\r\n";
                    var filter;
                    for (var i = start; i < end; i++) {
                        if (numberedFilters[i].length >=60){
                            filter=numberedFilters[i].substring(0,56)+" ..."
                        } else {
                            filter=numberedFilters[i]
                        }
                        message += (i + 1) + ". " + filter + "\r\n";
                    }

                    var response = prompt(message,"");
                    // Check the user's response
                    if (response == null) {
                        // If the user cancels, break the loop
                        break;
                    } else if (response == "more" || response == "m") {
                        // If the user types 'more', move to the next batch of items
                        start += 20;
                        end += 20;
                    } else {
                        // If the user types a number, try to parse it as an integer
                        var index = parseInt(response);
                        // If the index is valid, delete the corresponding item from the array
                        if (index >= start + 1 && index <= end) {
                            numberedFilters.splice(index - 1, 1);
                            // Adjust the end index accordingly
                            end--;
                            break;
                        } else {
                            // If the index is invalid, alert the user
                            alert("Invalid index number entered");
                        }
                    }
                } else {
                    alert("There are no more items to show");
                    response=null;
                    break;
                }
            }
            // Update the saved filters and reload the page
            if (response != null){
                var strdelete = confirm(`Delete the item '${originalFilters[response-1]}'?`);
                if (strdelete == true) {
                    GM_setValue(filtertype+":", JSON.stringify(numberedFilters));
                    location.reload();
                }
            }
        } else {
            window.alert("There are no items to remove")
        }
    }

    //Function to search the keywords in the storage database and see if a product matches any of them
    function containsKeyword(filtertype,productDescription) {
        var savedKeywords=JSON.parse(GM_getValue(filtertype+":",null));
        if (savedKeywords != null){
            return savedKeywords.some(keyword => productDescription.match(new RegExp(keyword,"gi"))) ? true : false
        } else {
            return false
        }
    }

    //Function to update the hidden and filtered count numbers on the Amazon Vine page
    function updateCount() {
        document.getElementById("hideVineItems-count").innerHTML = `(${hiddenCount} Hidden / ${filteredCount} Filtered)`;
    }

    //Function to check where an ASIN already exists in the storage database
    function isHidden(ASIN) {
        return GM_getValue("ASIN:"+ASIN) ? true : false;
    }

    //Function to add an icon to each product to allow it to be hidden or unhidden.
    function addHideLink(tile, ASIN) {
        var tileContent = tile.querySelector(".vvp-item-tile .vvp-item-tile-content");
        if (tileContent) {
            var filteredProduct = tile.querySelector(".vvp-item-tile:not(.hideVineItems-filterProduct) .vvp-item-tile-content");
            var a = document.createElement("span");
            if (filteredProduct) {
                a.addEventListener("click", (e) =>{
                    tile.classList.toggle("hideVineItems-hideASIN");
                    if (isHidden(ASIN)) {
                        GM_deleteValue("ASIN:"+ASIN);
                        hiddenCount -= 1;
                    } else {
                        GM_setValue("ASIN:"+ASIN, new Date().toJSON().slice(0,10));
                        hiddenCount += 1;
                    }
                    updateCount();
                });
            }
            a.classList.add("hideVineItems-toggleASIN");
            tileContent.append(a);
        }
    }

    //Add the correct classes to products so they behave correctly
    document.querySelectorAll(".vvp-item-tile").forEach( (tile) => {
        var itemLink = tile.querySelector(".vvp-item-product-title-container > a[href^='/dp/']");
        if (itemLink) {
            totalCount += 1;
            var ASIN = itemLink.getAttribute("href").slice(4);
            var linkText=itemLink.textContent;
            if (isHidden(ASIN)) {
                tile.classList.add("hideVineItems-hideASIN");
                hiddenCount += 1;
            } else {
                if (containsKeyword("HIGHLIGHTS",linkText)){
                    tile.classList.add("hideVineItems-highlightProduct");
                } else {
                    if (containsKeyword("FILTERS",linkText)){
                        tile.classList.add("hideVineItems-filterProduct");
                        filteredCount += 1;
                    }
                }
            }
            addHideLink(tile, ASIN);
        }
    });

    // Show hidden items on Search page
    if ((location.search).includes("search=")){
        document.getElementById("hideVineItems-togglePage").checked=true;
        document.querySelector(":root").classList.toggle("hideVineItems-showHidden")
    }

    //Update the hidden and filtered count numbers on the Amazon Vine page
    updateCount();

    //Create stylesheet to customize the layout of the additional html elements
    GM_addStyle(`
    #hideVineItems-hideAll, #hideVineItems-unhideAll, #hideVineItems-filtersMenu {
      color:${textcolour};
    }

    #hideVineItems-hideAll:hover, #hideVineItems-unhideAll:hover, #hideVineItems-filtersMenu:hover {
      color: #C7511F;
      text-decoration: underline;
    }

    .hideVineItems-hideASIN, .hideVineItems-filterProduct {
      display:none;
    }

    .vvp-item-tile-content {
      position: relative;
    }

    .hideVineItems-toggleASIN {
      position: absolute;
      width: 20px !important;
      height: 17px !important;
      overflow: hidden;
      top: 2px;
      right: 0px;
      background-color: rgba(0,0,0,0.0);
      padding: 0;
      background: url("${hideSymbol}");
      background-repeat: no-repeat;
      background-size:contain;
    }

    .hideVineItems-hideASIN .vvp-item-tile-content .hideVineItems-toggleASIN
    {
      background: url("${unhideSymbol}");
      background-repeat: no-repeat;
      background-size:contain;
    }

    .hideVineItems-filterProduct .vvp-item-tile-content .hideVineItems-toggleASIN
    {
      background: url("${filterSymbol}");
      background-repeat: no-repeat;
      background-size:contain;
    }

    .hideVineItems-showHidden .hideVineItems-hideASIN, .hideVineItems-showHidden .hideVineItems-filterProduct {
      display:unset;
    }

    .hideVineItems-showHidden .hideVineItems-hideASIN img, .hideVineItems-showHidden .hideVineItems-hideASIN .a-button, .hideVineItems-showHidden .hideVineItems-hideASIN a,
    .hideVineItems-showHidden .hideVineItems-filterProduct img, .hideVineItems-showHidden .hideVineItems-filterProduct .a-button, .hideVineItems-showHidden .hideVineItems-filterProduct a{
      opacity: 50%;
    }

    .hideVineItems-highlightProduct {
      background-color:yellow;
    }

    .hideVineItems-highlightProduct img {
     opacity:70%
    }

    #hideVineItems-hideAll {
      background: url("${hideSymbol}");
      background-repeat: no-repeat;
      background-size:contain;
      padding-left:30px;
    }

    #hideVineItems-unhideAll {
      background: url("${unhideSymbol}");
      background-repeat: no-repeat;
      background-size:contain;
      padding-left:30px;
    }

    #hideVineItems-filterText {
      background: url("${filterSymbol}");
      background-repeat: no-repeat;
      background-size:contain;
      padding-left:40px;
    }

    #hideVineItems-unfilterText {
      background: url("${unfilterSymbol}");
      background-repeat: no-repeat;
      background-size:contain;
      padding-left:40px;
    }

    #hideVineItems-highlightText {
      background: url("${highlightSymbol}");
      background-repeat: no-repeat;
      background-size:contain;
      padding-left:40px;
    }

    #hideVineItems-unhighlightText {
      background: url("${unhighlightSymbol}");
      background-repeat: no-repeat;
      background-size:contain;
      padding-left:40px;
    }

    #hideVineItems-filtersMenu {
      background: url("${unfilterSymbol}");
      background-repeat: no-repeat;
      background-size:contain;
      padding-left:30px;
    }


    .bullet {
      margin-left:10px;
      margin-right:10px;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 32px;
      height: 20px;
      margin-left:10px;
      margin-bottom:5px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 12px;
      width: 12px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(12px);
      -ms-transform: translateX(12px);
      transform: translateX(12px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 12px;
    }

    .slider.round:before {
      border-radius: 50%;
    }

    .dropdown {
      display: inline-block;
      position: relative;
    }

    .dropdown-content {
      background-color: ${bgcolour};
      display: none;
      position: absolute;
      width: max-content;
      overflow: auto;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index:5000;
      padding:5px;
      border: 0.5px solid ${textcolour};
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    .dropdown .dropdown-click {
      display: block;
    }

    .dropdown-content a {
      display: block;
      color: ${textcolour};
      text-decoration: none;
      margin:5px;
      width: auto
    }

    .dropdown-content a:hover {
      color: #C7511F;
    }

    hr {
      margin-top:10px;
    }

    #vvp-items-grid {
      display:grid !important;
    }
    `);
}
