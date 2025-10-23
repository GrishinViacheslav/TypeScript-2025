"use strict";
// Задача 5. У localStorage зберігається об’єкт у форматі JSON. Проаналізувати цей об'єкт є типу Product{title:string, price:number}

if (confirm("Почати тестування?")) {
    type Product = {
    title:string
    price:number
    }
    const prod = {
    title: 'iPhone',
    price: 1000,
    };
    localStorage.setItem("phone", JSON.stringify(prod));

    function checkIsProduct(prod:unknown): prod is Product {
        return (!!prod && typeof prod === 'object' && ['title','price'].every(key=> key in prod))
    }


    try {
    const product = JSON.parse(localStorage.getItem("phone")!);
    if(!product) {
        document.write(`There is no "product" in local storage`)
    } else {
        const checkProd = checkIsProduct(product)
        if(checkProd) {
        document.write(`Відноситься до типу product`)
        } else {
        document.write(`Не відноситься до типу product`)
        }
    }
    } catch (error) {
        console.error('Помилка:', error)
    }
}

