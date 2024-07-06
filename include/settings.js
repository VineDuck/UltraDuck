class ultraDuckSettings {
    static settings = new MonkeyConfig({
        title: 'UltraDuck Settings',
        menuCommand: true,
        buttons: ['save', 'cancel'],
        onSave: function() {window.location.reload(true);},
        params: {
            run_on_rfy: {
                type: 'checkbox',
                default: ultraDuckQuacker.runOnRFY
            },
            run_on_afa: {
                type: 'checkbox',
                default: ultraDuckQuacker.runOnAFA
            },
            run_on_ai: {
                type: 'checkbox',
                default: ultraDuckQuacker.runOnAI
            },
            show_notifications: {
                type: 'checkbox',
                default: ultraDuckQuacker.showNotifications
            },
            notifications_on_RFY: {
                type: 'checkbox',
                default: ultraDuckQuacker.showNotificationsOnRFY
            },
            notifications_on_AFA: {
                type: 'checkbox',
                default: ultraDuckQuacker.showNotificationsOnAFA
            },
            notifications_on_AI: {
                type: 'checkbox',
                default: ultraDuckQuacker.showNotificationsOnAI
            },
            min_refresh: {
                type: 'number',
                default: ultraDuckQuacker.minRefresh
            },
            max_refresh: {
                type: 'number',
                default: ultraDuckQuacker.maxRefresh
            },
            rfy_delay: {
                type: 'number',
                default: ultraDuckQuacker.rfyDelay
            },
        }
    });
    
    static getSettings() {
        ultraDuckQuacker.runOnRFY = ultraDuckSettings.settings.get('run_on_rfy', true);
        ultraDuckQuacker.runOnAFA = ultraDuckSettings.settings.get('run_on_afa', true);
        ultraDuckQuacker.runOnAI = ultraDuckSettings.settings.get('run_on_ai', true);
        ultraDuckQuacker.showNotifications = ultraDuckSettings.settings.get('show_notifications', true);
        ultraDuckQuacker.showNotificationsOnRFY = ultraDuckSettings.settings.get('notifications_on_RFY', true);
        ultraDuckQuacker.showNotificationsOnAFA = ultraDuckSettings.settings.get('notifications_on_AFA', true);
        ultraDuckQuacker.showNotificationsOnAI = ultraDuckSettings.settings.get('notifications_on_AI', false);
        ultraDuckQuacker.minRefresh = parseInt(ultraDuckSettings.settings.get('min_refresh', 3000));
        ultraDuckQuacker.maxRefresh = parseInt(ultraDuckSettings.settings.get('max_refresh', 10000));
        ultraDuckQuacker.delay = Math.floor(Math.random () * (ultraDuckQuacker.maxRefresh - ultraDuckQuacker.minRefresh)) + ultraDuckQuacker.minRefresh;
        ultraDuckQuacker.rfyDelay = parseInt(ultraDuckSettings.settings.get('rfy_delay', 0));
    }
}
