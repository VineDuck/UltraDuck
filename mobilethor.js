// https://github.com/Thorvarium/vine-styling
// Vine Styling

function mobileCSS() {
        return `
:root {
  --default-item-tile-height: 30px;
  --default-grid-column: 90px;
  --default-max-product-title: 100px;
  --default-product-title-text-size: 10px;
  --default-cutoff-background-color: #d1d1d1;

  --item-tile-height: var(
    --custom-item-tile-height,
    var(--default-item-tile-height)
  );

  --calc-grid-column-width: calc(var(--item-tile-height) * 2.75);
  --grid-column-width: var(
    --custom-item-grid-column-width,
    var(--calc-grid-column-width)
  );

  --calc-max-product-title: calc(var(--item-tile-height) * 1.25);
  --max-product-title: var(
    --custom-max-product-title,
    var(--calc-max-product-title)
  );

  --calc-product-title-text-size: calc(var(--item-tile-height) * 0.333);
  --product-title-text-size: var(
    --custom-product-title-text-size,
    var(--calc-product-title-text-size)
  );

  --cutoff-background-color: var(
    --custom-cutoff-background-color,
    var(--default-cutoff-background-color)
  );
}

body {
  padding-right: 0px !important;
}

.a-section.vvp-items-button-and-search-container {
  flex-direction: column !important;
}

.vvp-container-right-align {
  margin-top: 10px !important;
  width: 100% !important;
  flex-grow: 1 !important;
}

.a-icon-search {
  display: none;
}

.a-search {
  flex-grow: 1;
}

#vvp-search-text-input {
  width: 100% !important;
}

#nav-main,
#vvp-logo-link {
  display: none;
}

.a-tabs {
  margin: 0px !important;
}

.a-tabs li a {
  padding: 1rem !important;
}

.nav-mobile.nav-ftr-batmobile {
  display: none;
}

.vvp-tab-set-container
  [data-a-name="vine-items"]
  .a-box-inner
  .vvp-tab-content
  .vvp-items-button-and-search-container {
  margin: 0px !important;
}

#a-page
  > div.a-container.vvp-body
  > div.a-tab-container.vvp-tab-set-container
  > ul {
  margin-bottom: 0px !important;
}

#vvp-header {
  justify-content: center !important;
}

.vvp-body {
  padding: 0px !important;
}

.vvp-header-links-container a,
.a-tab-heading a {
  font-size: 12px !important;
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

#vvp-items-button-container {
  width: 100% !important;
}

#vvp-browse-nodes-container .child-node {
  margin-left: 20px !important;
}

#vvp-browse-nodes-container .parent-node {
  background-color: white;
}
#vvp-browse-nodes-container > div:nth-child(odd) {
  background-color: #f3f3f3 !important;
}
#vvp-browse-nodes-container .parent-node,
#vvp-browse-nodes-container .child-node {
  display: flex !important;
}
#vvp-browse-nodes-container .parent-node a,
#vvp-browse-nodes-container .child-node a {
  flex-grow: 1 !important;
}

#vvp-browse-nodes-container > p {
  text-align: right;
}

#vvp-items-button-container .a-button-toggle.a-button {
  margin: 0px !important;
  padding: 0px !important;
  width: calc(100% / 3) !important;
  border-radius: 0px;
}

#vvp-items-button-container .a-button-toggle.a-button a {
  font-size: 12px !important;
  height: 54px;
  display: flex;
  align-items: center;
  padding: 0 !important;
  justify-content: center !important;
}

.vvp-items-container {
  flex-direction: column !important;
}

#vvp-items-grid .vvp-item-tile .vvp-item-tile-content > * {
  margin: 0 !important;
}

#vvp-items-grid .vvp-item-tile .vvp-item-tile-content > img {
  margin-top: 0.5rem !important;
}

.vvp-item-tile,
.a-tab-content {
  border: none !important;
}

.a-button-primary {
  border-radius: 0 !important;
  background: #303333 !important;
  border-color: #303333 !important;
  transition: 0.2s !important;
}

.a-button-primary .a-button-text {
  color: white !important;
}

.a-button-base {
  border-radius: 0 !important;
}

.a-button-primary .a-button-inner {
  background-color: transparent !important;
}

.a-button-primary:hover {
  opacity: 0.85 !important;
}

.a-pagination {
  display: flex !important;
  justify-content: center;
}

.a-pagination li:first-child a,
.a-pagination li:last-child a {
  color: transparent !important;
}

.a-pagination li:first-child,
.a-pagination li:last-child {
  color: transparent !important;
  position: relative;
}

.a-pagination li.a-disabled {
  display: none !important;
}

.a-pagination li:first-child a,
.a-pagination li:last-child a {
  display: flex;
  align-content: center;
  position: relative;
  justify-content: center;
}

.a-pagination li:first-child a:before,
.a-pagination li:last-child a:before {
  position: absolute !important;
  color: white !important;
  font-size: 2rem !important;
  line-height: 4rem;
  height: 100%;
  width: 100%;
}

.a-pagination li:first-child a:before {
  content: "👈" !important;
}

.a-pagination li:last-child a:before {
  content: "👉" !important;
}

.a-pagination li {
  width: 40px !important;
  height: 40px !important;
}
.a-pagination li a {
  padding: 0px !important;
  margin: 0px !important;
  height: 100%;
  line-height: 40px !important;
}

.vvp-details-btn {
  padding: 0.25rem 0 !important;
  margin: 0.25rem 0rem !important;
}

.vvp-details-btn .a-button-text {
  padding: 0.5px 0.25px !important;
}

#vvp-items-button--recommended a,
#vvp-items-button--all a,
#vvp-items-button--seller a {
  color: transparent;
}

#vvp-items-button--recommended a::before,
#vvp-items-button--all a::before,
#vvp-items-button--seller a::before {
  color: black !important;
  position: absolute;
  font-size: 20px;
  font-weight: bold;
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

.a-popover.a-popover-modal.a-declarative.a-popover-modal-fixed-height {
  height: calc(100% - 100px) !important;
  width: 100% !important;
  top: 50px !important;
  right: 0px !important;
  left: 0px !important;
  padding: 0px !important;
}

#vvp-product-details-modal--main {
  flex-direction: column;
}

#vvp-product-details-modal--tax-value {
  position: absolute !important;
  top: 20px !important;
  z-index: 100;
  left: 18px;
}

#vvp-product-details-img-container {
  width: unset !important;
  height: 150px !important;
  display: flex !important;
  justify-content: center !important;
  position: relative !important;
}

#vvp-product-details-img-container img {
  height: 150px !important;
}

#vvp-product-details-modal--limited-quantity {
  position: absolute !important;
  bottom: -28px !important;
  z-index: 101 !important;
  right: 8px !important;
  color: transparent !important;
  width: 41.2px !important;
}

#vvp-product-details-modal--limited-quantity::before {
  content: "⌛";
  font-size: 30px;
  text-shadow: 0px 0px 20px #ff0000 !important;
  color: white !important;
}

#vvp-beta-tag {
  display: none;
}

#vvp-search-button,
#vvp-search-text-input {
  border-radius: 0rem !important;
}

#vvp-search-button #vvp-search-button-announce {
  line-height: 1 !important;
}

.vvp-items-container {
  margin: 0rem !important;
}

#vvp-browse-nodes-container {
  margin: 1rem 0rem !important;
}

#vvp-browse-nodes-container:not(:hover) p,
#vvp-browse-nodes-container:not(:hover) .parent-node,
#vvp-browse-nodes-container:not(:hover) .child-node {
  display: none !important;
}

#vvp-browse-nodes-container:not(:hover):before {
  content: "Filter Categories";
  padding: 0.5rem;
  line-height: 3rem;
  color: #fff;
}

#vvp-browse-nodes-container:not(:hover) {
  background-color: #303333;
}

#vvp-product-details-img-container,
#vvp-product-details-img-container img {
  height: 75px;
}

#vvp-browse-nodes-container,
#vvp-browse-nodes-container .parent-node,
#vvp-browse-nodes-container .child-node {
  width: unset !important;
}

.vvp-reviews-table .vvp-reviews-table--row,
.vvp-orders-table .vvp-orders-table--row {
  display: flex;
  flex-wrap: wrap;
}

.vvp-reviews-table tbody,
.vvp-orders-table tbody {
  display: flex !important;
  flex-wrap: wrap;
}

.vvp-reviews-table--heading-row,
.vvp-orders-table--heading-row {
  display: none !important;
}

.vvp-reviews-table td,
.vvp-orders-table td {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}

.vvp-reviews-table td.vvp-reviews-table--image-col,
.vvp-orders-table td.vvp-orders-table--image-col {
  padding-top: 10px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.vvp-reviews-table td.vvp-reviews-table--image-col img,
.vvp-orders-table td.vvp-orders-table--image-col img {
  height: 75px;
}

.vvp-reviews-table--actions-col,
.vvp-orders-table--actions-col {
  width: 100% !important;
  display: flex !important;
  align-items: center !important;
}

#vvp-items-grid, #tab-unavailable, #tab-hidden, #tab-favourite {
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--grid-column-width), auto)
  ) !important;
}

#vvp-items-grid-container .vvp-item-tile .vvp-item-tile-content {
  width: var(--grid-column-width) !important;
}

#vvp-items-grid-container
  .vvp-item-tile
  .vvp-item-tile-content
  > .vvp-item-product-title-container {
  height: var(--max-product-title) !important;
  font-size: var(--product-title-text-size) !important;
}

#vvp-items-grid-container
  .vvp-item-tile
  .vvp-item-tile-content
  > .vvp-item-product-title-container
  .a-truncate {
  max-height: var(--max-product-title) !important;
}
`;
}
