"use strict";
// Задача 5. Дано набір налаштувань (ключ-значення(enabled/disabled)). Вивести ті, які є увімкненими
if (confirm("Почати тестування?")) {
    function throwError(message: string):never {
      throw new Error(`Error! ${message}`)
    }
    enum SetOfSettings {
        Enabled = 'ENABLED',
        Disabled = 'DISABLED',
    }
    type Settings = {
        [key:string]: SetOfSettings
    }
    function getEnabledPropOfSet(set:Settings[]):void {
        if(set.length === 0) throwError(`The set is empty!`)
        set.forEach(item => {
            Object.entries(item).forEach(([key, value])=> {
                if(value ===  SetOfSettings.Enabled) {
                    console.log(`${key} is enabled`)
                }
            })
        })
    }
    const settingsObj: Settings[] = [
        {notifications:  SetOfSettings.Enabled},
        {darkMode:  SetOfSettings.Enabled},
        {autoSave:  SetOfSettings.Enabled},
        {soundEffects:  SetOfSettings.Disabled},
        {offlineMode:  SetOfSettings.Enabled},
        {analytics:  SetOfSettings.Disabled},
    ]
    console.log(getEnabledPropOfSet(settingsObj))
}

