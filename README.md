# 🦆 UltraDuck 🦆
### Quacks when an unhidden RFY item is found. Built in hider script, keyboard shortcuts and styling.
Hider script based on https://github.com/MD2K23/VineToolsUK/<br />
Styles using https://github.com/Thorvarium/vine-styling<br />
Settings using https://github.com/odyniec/MonkeyConfig

**${\textsf{\color{green}Current version 1.1.1.7}}$ Updated 2024-07-11 08:49**

For android install, [see this link](https://github.com/VineDuck/UltraDuck/blob/main/android.md)<br />

The page title will now change to "💨🦆 (RFY/AFA/AI)" when the page refresher is running.<br />
If it shows the original "Amazon vine" or "⏸🦆" title, the refresher is not running.

Refreshes the vine page every 3 to 10 seconds as long as the tab is not focused and there are no items showing.<br />
If an item is found, or a CAPTCHA occurs, the script will stop running on all tabs that it's open on. Refresh each tab after completing CAPTCHA.<br />
Quacks when item found. Pages that it runs on, and notifications can be customised easily.<br />

### Sections
[How to install](#how-to-install) <br />
[Fixing Chrome sound issues](#fixing-chrome-sound-issues) <br />
[How to change settings](#how-to-change-settings) <br />
[How to update](#how-to-update) <br />
[Keyboard shortcuts](#keyboard-shortcuts) <br />

### How to install
- You will need a userscript addon for your browser. I use Violentmonkey. There are others available. Install one.
- Use [this link](https://github.com/VineDuck/UltraDuck/raw/main/UltraDuck.user.js) to install the script.
- In site settings in chrome, or permissions > autoplay in firefox, make sure to allow amazon.co.uk for sound.
- Open a vine page. You will see a message telling you to click to start the duck.
- Hide all items.
- Go use a different tab or app.

After an item has been found, the script will be stopped until you refresh the page manually.
Just hide any items you don't want and hit F5 before focusing on a different window.

**${\textsf{\color{red}Important: Page refresh only works when the tab/window is not currently active.}}$** <br />
**${\textsf{\color{red}Simply pull up another window in front, such as file explorer or another browser window.}}$**

### Fixing Chrome sound issues
Clicking the message to start the duck should fix Chromes sound issues.
You should hear a quack after clicking the message.

### How to change settings
- Open a vine page.
- Click the monkey face on the address bar. If you don't see it, click the jigsaw icon and pin Violentmonkey to the toolbar.
- Click UltraDuck Settings.
- Run on afa/rfy/ai will change whether the page refresher/quacker runs on those pages. The hide item stuff will always run.
- Show notifications will change whether a desktop notification is shown.
- Min refresh is the minimum time between refreshes, in milliseconds (seconds X 1000).
- Max refresh is the maximum time between refreshes, in milliseconds (seconds X 1000).
- Rfy delay is a separate value for RFY refresh. If set to 0, RFY will use the same values as other pages. If set to a number of milliseconds, it'll use that.
- Quack attack is whether the quack alert sound should be repeated. 0 for no, any other number is the number of seconds between quacks. Will stop when window is focused.
- Use keys enables or disables keyboard shortcuts.

### How to update
- Your userscript manager should have an update option, if not simply follow the install link again.

### Keyboard shortcuts
By default, the keyboard shortcuts are as follow:
- r: Go to RFY page.
- a: Go to AFA page.
- i: Go to AI page.
- n: Next page (on AI, or if AFA ever gets more than one page).
- p: Previous page.
- h: Hide all items currently showing.
- s: Show all items currently hidden.
- 1: Page 1 of AI.
- 2: Page 2 of AI.
- ...
- 9: Page 9 of AI.
- 0: Page 10 of AI.
