// Задача 3. Вводиться назва продукту, ціна одиниці та кількість для 2-х видів товарів. Вивести чек про купівлю.
if (confirm("Почати тестування?")) {
  type ProdItem = {
    name: string,
    price: number,
    quantity: number,
    totalPrice: number,
  };
  
  function getProductItem():ProdItem {
    const name = prompt(`Product label`) ?? "";
    const price = parseFloat(prompt(`Product price`, "0") ?? "0");
    const quantity = parseFloat(prompt(`Product number`, "0") ?? "0");
    const totalPrice = price * quantity;
    return {
      name,
      price,
      quantity,
      totalPrice
    }
  }
  
  function getProductCart(prodTypeNum = 2) {
  if(isNaN(prodTypeNum) || prodTypeNum <=0) return []
  const cart: Array<ProdItem> = []
  for(let i = 1; i <= prodTypeNum; i++) {
      const prod = getProductItem()
      cart.push(prod)
  } 
  return cart
  }
  
  const productCart = getProductCart()
  
  function getReceipt(productCart:Array<ProdItem>):string {
      let receipt = `<div class = 'product__line'>
                          <span>Product</span>
                          <span>Product price</span>
                          <span>Quantity</span>
                          <span>Total price</span>
                      </div>`
      let totalCost = 0
      productCart.forEach((product:ProdItem)=> {
          receipt += `<div class = 'product__line'>
                          <span>${product.name}</span>
                          <span>${product.price}</span>
                          <span>${product.quantity}</span>
                          <span>${product.totalPrice}</span>
                      </div>`
          totalCost += product.totalPrice
      })
      receipt += `<div>Загалом до сплати: ${totalCost}</div>`
  
      return receipt   
  }
  
  document.write(getReceipt(productCart))
}
