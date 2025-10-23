// Задача 4. Є продукти: Book (має author), Electronics (має warranty), Clothes (має size). Продукти можуть бути onSale або regularPrice.
// Створити тип ShopProduct, який об’єднує тип продукту та його статус, використовуючи & і |.

if (confirm("Почати тестування?")) {
    type Book = {
    author: string
    }
    type Electronics = {
    warranty: number
    }
    type Clothes = {
    size: number
    }

    type ProductStatus = {
    status: 'onSale' | 'regularPrice'
    }

    type ShopProduct = (Book | Electronics | Clothes) & ProductStatus
    const prod:ShopProduct = {
    warranty: 2,
    status: 'onSale'
    }
    console.log(prod);
}
