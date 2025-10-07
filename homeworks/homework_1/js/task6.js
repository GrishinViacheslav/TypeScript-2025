"use strict";
// Задача 6. Вводиться сума грошей і позначення валюти. Потрібно перевести у інші валюти ("USD" ,  "EUR" , "UAH").
// Тобто якщо вводять гривні, то перевести у долари і євро. А якщо вводять долари, то перевести у гривні  і євро. Курси валют – це константи.
var _a, _b, _c;
if (confirm("Почати тестування?")) {
    const USD_TO_UAH_RATE = 41.33;
    const EUR_TO_UAH_RATE = 48.25;
    const USD_TO_EUR_RATE = USD_TO_UAH_RATE / EUR_TO_UAH_RATE;
    const totalSum = parseFloat((_a = prompt("Sum:", "100")) !== null && _a !== void 0 ? _a : "0");
    const currencyType = (_c = (_b = prompt("Choose your currency: usd, eur, uah ", "usd")) === null || _b === void 0 ? void 0 : _b.toLowerCase()) !== null && _c !== void 0 ? _c : "";
    let res;
    if (totalSum <= 0 || !currencyType) {
        res = `Incorrect data`;
    }
    else {
        switch (currencyType) {
            case "usd":
                res = `Your have ${totalSum.toFixed(2) + currencyType}. 
        Convert to eur: ${(totalSum * USD_TO_EUR_RATE).toFixed(2)} eur.
        Convert to uah: ${(totalSum * USD_TO_UAH_RATE).toFixed(2)} uah.`;
                break;
            case "eur":
                res = `Your have ${totalSum.toFixed(2) + currencyType}. 
        Convert to usd: ${(totalSum / USD_TO_EUR_RATE).toFixed(2)} usd.
        Convert to uah: ${(totalSum * EUR_TO_UAH_RATE).toFixed(2)} uah.`;
                break;
            case "uah":
                res = `Your have ${totalSum.toFixed(2) + currencyType}. 
        Convert to usd: ${(totalSum / USD_TO_UAH_RATE).toFixed(2)} usd.
        Convert to eur: ${(totalSum / EUR_TO_UAH_RATE).toFixed(2)} eur.`;
                break;
            default: {
                res = `Incorrect currency label`;
            }
        }
    }
    document.write(res);
}

