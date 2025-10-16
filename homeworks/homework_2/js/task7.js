"use strict";
// Задача 7. Згенерувати масив нагород (золота, срібна, бронзова медалі та грамота). Підрахувати кількість кожної з нагород. Використати enum.
// Можете і never якось застосувати
if (confirm("Почати тестування?")) {
    function throwError(message) {
        throw new Error(`Error! ${message}`);
    }
    let Prize;
    (function (Prize) {
        Prize["GOLD"] = "gold";
        Prize["SILVER"] = "silver";
        Prize["BRONZE"] = "bronze";
        Prize["CERTIFICATE"] = "certificate";
    })(Prize || (Prize = {}));
    function getRandomNum(minNum = 1, maxNum = 4) {
        if (isNaN(minNum) || isNaN(maxNum) || minNum < 0 || maxNum < minNum)
            throwError(`Inncorrect min or max number`);
        return minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
    }
    function getRandomPrize() {
        const randomNum = getRandomNum(1, 4);
        let randomPrize;
        switch (randomNum) {
            case 1:
                randomPrize = Prize.GOLD;
                break;
            case 2:
                randomPrize = Prize.SILVER;
                break;
            case 3:
                randomPrize = Prize.BRONZE;
                break;
            default:
                randomPrize = Prize.CERTIFICATE;
        }
        return randomPrize;
    }
    function generateRandomPrizeList(listItemNum = 10) {
        if (isNaN(listItemNum) || listItemNum < 1)
            throwError(`Incorrect list item numbers`);
        const randomPrizelist = [];
        for (let i = 0; i < listItemNum; i++) {
            const randomPrize = getRandomPrize();
            randomPrizelist.push(randomPrize);
        }
        return randomPrizelist;
    }
    function prizeCounter(prizeList) {
        if (!Array.isArray(prizeList) || prizeList.length === 0)
            throwError(`Incorrect list item numbers`);
        if (!prizeList.every((prize) => Object.values(Prize).includes(prize))) {
            throwError(`Inccorect item in list`);
        }
        let prizeCounter = {};
        prizeList.forEach((prize) => {
            if (!(prize in prizeCounter)) {
                prizeCounter[prize] = 1;
            }
            else {
                prizeCounter[prize] += 1;
            }
        });
        return prizeCounter;
    }
    try {
        const randomPrizeList = generateRandomPrizeList(15);
        const counter = prizeCounter(randomPrizeList);
        console.log(counter);
    }
    catch (error) {
        console.error(`Error!`, error instanceof Error ? error.message : "Unknown error");
    }
}


