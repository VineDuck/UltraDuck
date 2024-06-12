class ultraDuckSettings {
    static settings = new MonkeyConfig({
        title: 'UltraDuck Settings',
        menuCommand: true,
        buttons: ['save', 'cancel'],
        onSave: function() {window.location.reload();},
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
        }
    });
    
    static getSettings() {
        ultraDuckQuacker.runOnRFY = ultraDuckSettings.settings.get('run_on_rfy');
        ultraDuckQuacker.runOnAFA = ultraDuckSettings.settings.get('run_on_afa');
        ultraDuckQuacker.runOnAI = ultraDuckSettings.settings.get('run_on_ai');
        ultraDuckQuacker.showNotifications = ultraDuckSettings.settings.get('show_notifications');
        ultraDuckQuacker.showNotificationsOnRFY = ultraDuckSettings.settings.get('notifications_on_RFY');
        ultraDuckQuacker.showNotificationsOnAFA = ultraDuckSettings.settings.get('notifications_on_AFA');
        ultraDuckQuacker.showNotificationsOnAI = ultraDuckSettings.settings.get('notifications_on_AI');
        ultraDuckQuacker.minRefresh = ultraDuckSettings.settings.get('min_refresh');
        ultraDuckQuacker.maxRefresh = ultraDuckSettings.settings.get('max_refresh');
    }
}
