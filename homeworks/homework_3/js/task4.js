"use strict";
// Задача 4. Є продукти: Book (має author), Electronics (має warranty), Clothes (має size). Продукти можуть бути onSale або regularPrice.
// Створити тип ShopProduct, який об’єднує тип продукту та його статус, використовуючи & і |.
if (confirm("Почати тестування?")) {
    const prod = {
        warranty: 2,
        status: 'onSale'
    };
    console.log(prod);
}

