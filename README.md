# 🦆 UltraDuck 🦆
### Quacks when an unhidden RFY item is found. Built in hider script, keyboard shortcuts and styling.
Hider script based on https://github.com/MD2K23/VineToolsUK/<br />
Styles using https://github.com/Thorvarium/vine-styling

**${\textsf{\color{green}Current version 1.0.5.3}}$ Updated 08/06/24 08:48**

Refreshes the vine page every 3 to 10 seconds as long as the tab is not focused and there are no items showing.
If an item is found, or a CAPTCHA occurs, the script will stop running.
Quacks when item found, and also sends notifications for AFA and RFY.
Pages that it runs on, and notifications can be customised easily.

You will need a userscript plugin such as GreaseMonkey, VoilentMonkey, FireMonkey or TamperMonkey to run this script.


### How to use
- Use [this link](https://github.com/Jimbo5431/UltraDuck/raw/main/UltraDuck.user.js) to install the script.
- In site settings in chrome, or permissions > autoplay in firefox, make sure to allow amazon.co.uk for sound.
- Open the required page, and hide all items.
- Refresh page.
- Click somewhere in the page to enable sound to work.
- Go use a different tab or app.

After an item has been found, the script will be stopped until you refresh the page manually.
Just hide any items you don't want, hit F5, and click somewhere in the page again before focusing on a different window.

**${\textsf{\color{red}Important: Make sure you have clicked somewhere in the page before doing something else, or sound may not work.}}$**
**${\textsf{\color{red}This is due to chrome policies on auto play.}}$**

**${\textsf{\color{red}Important: Page refresh only works when the tab/window is not currently active.}}$**

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
