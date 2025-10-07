"use strict";
function getProductItem() {
    var _a, _b, _c;
    const name = (_a = prompt(`Product label`)) !== null && _a !== void 0 ? _a : "";
    const price = parseFloat((_b = prompt(`Product price`, "0")) !== null && _b !== void 0 ? _b : "0");
    const quantity = parseFloat((_c = prompt(`Product number`, "0")) !== null && _c !== void 0 ? _c : "0");
    const totalPrice = price * quantity;
    return {
        name,
        price,
        quantity,
        totalPrice
    };
}
function getProductCart(prodTypeNum = 2) {
    if (isNaN(prodTypeNum) || prodTypeNum <= 0)
        return [];
    const cart = [];
    for (let i = 1; i <= prodTypeNum; i++) {
        const prod = getProductItem();
        cart.push(prod);
    }
    return cart;
}
const productCart = getProductCart();
function getReceipt(productCart) {
    let receipt = `<div class = 'product__line'>
                        <span>Product</span>
                        <span>Product price</span>
                        <span>Quantity</span>
                        <span>Total price</span>
                    </div>`;
    let totalCost = 0;
    productCart.forEach((product) => {
        receipt += `<div class = 'product__line'>
                        <span>${product.name}</span>
                        <span>${product.price}</span>
                        <span>${product.quantity}</span>
                        <span>${product.totalPrice}</span>
                    </div>`;
        totalCost += product.totalPrice;
    });
    receipt += `<div>Загалом до сплати: ${totalCost}</div>`;
    return receipt;
}
document.write(getReceipt(productCart));