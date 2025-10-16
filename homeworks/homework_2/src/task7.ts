// Задача 7. Згенерувати масив нагород (золота, срібна, бронзова медалі та грамота). Підрахувати кількість кожної з нагород. Використати enum.
// Можете і never якось застосувати

if (confirm("Почати тестування?")) {
  function throwError(message: string): never {
    throw new Error(`Error! ${message}`);
  }

  enum Prize {
    GOLD = "gold",
    SILVER = "silver",
    BRONZE = "bronze",
    CERTIFICATE = "certificate",
  }
  type PrizeType = Prize;
  type PrizeCounter = {
    [key: string]: number;
  };

  function getRandomNum(minNum: number = 1, maxNum: number = 4): number {
    if (isNaN(minNum) || isNaN(maxNum) || minNum < 0 || maxNum < minNum) throwError(`Inncorrect min or max number`);
    return minNum + Math.floor(Math.random() * (maxNum - minNum + 1));
  }

  function getRandomPrize(): PrizeType {
    const randomNum = getRandomNum(1, 4);
    let randomPrize: PrizeType;
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

  function generateRandomPrizeList(listItemNum: number = 10): PrizeType[] {
    if (isNaN(listItemNum) || listItemNum < 1) throwError(`Incorrect list item numbers`);
    const randomPrizelist: PrizeType[] = [];
    for (let i = 0; i < listItemNum; i++) {
      const randomPrize = getRandomPrize();
      randomPrizelist.push(randomPrize);
    }
    return randomPrizelist;
  }

  function prizeCounter(prizeList: PrizeType[]): PrizeCounter {
    if (!Array.isArray(prizeList) || prizeList.length === 0) throwError(`Incorrect list item numbers`);
    if (!prizeList.every((prize) => Object.values(Prize).includes(prize))) {
      throwError(`Inccorect item in list`);
    }
    let prizeCounter: PrizeCounter = {};
    prizeList.forEach((prize) => {
      if (!(prize in prizeCounter)) {
        prizeCounter[prize] = 1;
      } else {
        prizeCounter[prize] += 1;
      }
    });
    return prizeCounter;
  }

  try {
    const randomPrizeList = generateRandomPrizeList(15);
    const counter = prizeCounter(randomPrizeList);
    console.log(counter);
  } catch (error) {
    console.error(`Error!`, error instanceof Error ? error.message : "Unknown error");
  }
}
