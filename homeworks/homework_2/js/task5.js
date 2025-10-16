if (confirm("Почати тестування?")) {
    function throwError(message) {
        throw new Error(`Error! ${message}`);
    }
    let SetOfSettings;
    (function (SetOfSettings) {
        SetOfSettings["Enabled"] = "ENABLED";
        SetOfSettings["Disabled"] = "DISABLED";
    })(SetOfSettings || (SetOfSettings = {}));
    function getEnabledPropOfSet(set) {
        if (set.length === 0)
            throwError(`The set is empty!`);
        set.forEach(item => {
            Object.entries(item).forEach(([key, value]) => {
                if (value === SetOfSettings.Enabled) {
                    console.log(`${key} is enabled`);
                }
            });
        });
    }
    const settingsObj = [
        { notifications: SetOfSettings.Enabled },
        { darkMode: SetOfSettings.Enabled },
        { autoSave: SetOfSettings.Enabled },
        { soundEffects: SetOfSettings.Disabled },
        { offlineMode: SetOfSettings.Enabled },
        { analytics: SetOfSettings.Disabled },
    ];
    console.log(getEnabledPropOfSet(settingsObj));
}

