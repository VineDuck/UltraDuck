# 🦆 UltraDuck 🦆
### How to install on android
- First, go to the play store and install [Kiwi Browser](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser).
- Open Kiwi, tap the 3 dots at the top, and then extensions.
- Tap the "+ (from store)" button.
- In the search box at the top, enter violentmonkey.
- Tap Violentmonkey from violentmonkey.github.io
- Tap "Add to Chrome"
- Close all tabs, and tap "New tab".
- Open [this link](https://github.com/VineDuck/UltraDuck/raw/main/UltraDuck.user.js) in Kiwi, and you should get an install page.
- Tap install.

### How to run
- Open a vine page in Kiwi.
- Tap the box to enable the duck.
- Make sure all items are hidden.
- Tap the ➕ at the top of the screen.
- You should now see 1 tab, the top saying something like "💨🦆 RFY 5s".
- You can now minimize Kiwi, use a different app or leave Kiwi in the tab selection page.

**${\textsf{\color{red}Important: After each quack alert, you will need to refresh the page.}}$** <br />

### How to change settings
- Go to a vine page in Kiwi.
- Tap the 3 dots at the top, scroll down and tap Violentmonkey.
- Tap UltraDuck Settings.
- Run on afa/rfy/ai will change whether the page refresher/quacker runs on those pages. The hide item stuff will always run.
- Show notifications will change whether an android notification is shown.
- Min refresh is the minimum time between refreshes, in milliseconds (seconds X 1000).
- Max refresh is the maximum time between refreshes, in milliseconds (seconds X 1000).

### How to run overnight
- Install [Macrodroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid).
- You can install these 2 files, or continue below. [File 1](https://raw.githubusercontent.com/VineDuck/UltraDuck/main/Kiwi_close.macro) [file 2](https://raw.githubusercontent.com/VineDuck/UltraDuck/main/Kiwi_launch.macro) (long press, save as/download, then open with macrodroid)

  <br />
- Go to Macros and click the plus icon.
- In the name box at the top, enter "Kiwi close".
- Click the plus icon on Triggers.
- Select Applications -> Application Launched/Closed -> Application Closed -> Select Application -> Kiwi Browser.
- Tap OK.
- Tap the plus icon on Actions.
- Tap Screen -> Keep Device Awake -> Disable Keep Awake.
- Tap the tick at the bottom of the screen.
- Hold down on the Kiwi Close Macro.
- Tap Clone Macro.
- Change the name to Kiwi Open, and tap Application Closed in triggers. Tap Configure, and change it to Application Launched. Tap OK 2 more times.
- Tap Disable Keep Awake -> Configure and change it to Enable, tap OK and set it to Screen On - Until Disabled.
- Tap the tick at the bottom of the screen.
- You should now have a screen that stays on while Kiwi browser is in the foreground.
- Leave kiwi on the tabs page and in the foreground while you sleep.
<br />

![Android notification](https://github.com/VineDuck/UltraDuck/blob/main/kiwimacro.jpg?raw=true)
