// https://github.com/Thorvarium/vine-styling
// Vine Styling

function deskCSS() {
    return `
body {
  padding-right: 0px !important;
}

#navbar-main, #skiplink {
  display: none;
}

#rhf, #rhf-shoveler, .rhf-frame, #navFooter {
  display: none !important;
}

.amzn-ss-wrap {
  display: none !important;
}

#vvp-items-grid-container
  .vvp-item-tile
  .vvp-item-tile-content
  > .vvp-item-product-title-container {
  height: var(--item-tile-height, 40px) !important;
  font-size: var(--product-title-text-size, 10px) !important;
}

#vvp-items-grid-container
  .vvp-item-tile
  .vvp-item-tile-content
  > .vvp-item-product-title-container
  .a-truncate {
  max-height: var(--item-tile-height, 40px) !important;
}

#vvp-product-details-modal--tax-value {
    position: absolute !important;
    top: 20px !important;
    z-index: 101;
    left: 18px;
}

.a-link-normal[href$="560798"]:before { content: "📸";}  /* Electronics & Photo */
.a-link-normal[href$="340831031"]:before { content: "💻";}  /* Computers & Accessories */
.a-link-normal[href$="11052681"]:before { content: "🍴";}  /* Home & Kitchen */
.a-link-normal[href$="11961407031"]:before { content: "👚";}  /* Fashion */
.a-link-normal[href$="65801031"]:before { content: "👨‍⚕️";}  /* Health & Personal Care */
.a-link-normal[href$="117332031"]:before { content: "💄";}  /* Beauty */
.a-link-normal[href$="468292"]:before { content: "🎲";}  /* Toys & Games */
.a-link-normal[href$="340840031"]:before { content: "🐈";}  /* Pet Supplies */
.a-link-normal[href$="318949011"]:before { content: "⚾";}  /* Sports & Outdoors */
.a-link-normal[href$="79903031"]:before { content: "🔨";}  /* DIY & Tools */
.a-link-normal[href$="213077031"]:before { content: "💡";}  /* Lighting */
.a-link-normal[href$="248877031"]:before { content: "🚐";}  /* Automotive */
.a-link-normal[href$="192413031"]:before { content: "📁";}  /* Stationery & Office Supplies */
.a-link-normal[href$="59624031"]:before { content: "👶";}  /* Baby Products */
.a-link-normal[href$="11052671"]:before { content: "🌳";}  /* Garden */
.a-link-normal[href$="5866054031"]:before { content: "🔬";}  /* Business, Industry & Science */
.a-link-normal[href$="9699254031"]:before { content: "🧤";}  /* Handmade Products */
.a-link-normal[href$="340834031"]:before { content: "🍎";}  /* Grocery */
.a-link-normal[href$="340837031"]:before { content: "🎹";}  /* Musical Instruments & DJ */
.a-link-normal[href$="3146281"]:before { content: "🏡";}  /* Home & Garden */
.a-link-normal[href$="300703"]:before { content: "🎮";}  /* PC & Video Games */
.a-link-normal[href$="908798031"]:before { content: "📻";}  /* Large Appliances */
.a-link-normal[href$="266239"]:before { content: "📘";}  /* Books */
.a-link-normal[href$="3010085031"]:before { content: "🎬";}  /* Prime Video */

#vvp-browse-nodes-container {
    width: 270px !important;
}

#vvp-browse-nodes-container .parent-node {
    width: 250px !important;
}

#vvp-browse-nodes-container .child-node {
  margin-left: 38px !important;
  width: 207px !important;
}

.a-section.vvp-tab-content {
  position: relative
}

.a-pagination {
  position: absolute;
  top: 8px;
  right: 50%;
  transform: translateX(50%);
}

.vvp-orders-table--heading-top {
  margin-top: 35px !important;
}

#vvp-browse-nodes-container .parent-node {
  background-color: transparent;
}
#vvp-browse-nodes-container > div:nth-child(odd) {
    background-color: rgb(127 127 127 / 10%) !important;
}
#vvp-browse-nodes-container .parent-node, #vvp-browse-nodes-container .child-node  {
  display: flex !important;
}
#vvp-browse-nodes-container .parent-node a, #vvp-browse-nodes-container .child-node a {
  flex-grow: 1 !important;
}

#vvp-product-details-modal--limited-quantity {
    position: absolute !important;
    bottom: -36px !important;
    z-index: 101 !important;
    left: 8px !important;
    color: transparent !important;
    width: 41.2px !important;
}

#vvp-product-details-modal--limited-quantity::before {
  content: "⌛";
  font-size: 30px;
  text-shadow: 0px 0px 20px #ff0000 !important;
  color: white !important;
}

/* RFY, AFA, AI */
#vvp-items-button--recommended a,
#vvp-items-button--all a,
#vvp-items-button--seller a {
  color: transparent;
  width: 75px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  height: 48px;
  display: flex;
  align-items: center;
}

#vvp-items-button--recommended a::before,
#vvp-items-button--all a::before,
#vvp-items-button--seller a::before {
    color: initial;
    position: absolute !important;
    font-size: 20px !important;
    font-weight: bold !important;
    width: 100% !important;
    left: 0px !important;
    text-align: center !important;
    padding: 9px 0px !important;
}

#vvp-items-button--recommended a::before {
    content: "RFY" !important;
}

#vvp-items-button--all a::before {
    content: "AFA" !important;
}

#vvp-items-button--seller a::before {
    content: "AI" !important;
}
`;
}
