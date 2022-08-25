// online shope

class Product {

    constructor(name, price) {
        this.name = name
        this.price = price

    }

    toText() {
        console.log(`${this.name} ${this.price} in total ${(this.price * 0.16).toFixed(2)}`);

    }

    containedVAT() {
return (this.price - this.price / 1.16).toFixed(2)

    }

}

const tracksuit = new Product("Adidas tracksuit", 150.0)
const shoes = new Product("Puma running shoes", 85.99)
const socks = new Product("Socks set", 4.99)

tracksuit.toText()
console.log(tracksuit.containedVAT());

// 2

class Cart {

 constructor(){
     this.products = []

 }
 addProduct(shoppedProduct) {
if (shoppedProduct instanceof Product) {

    this.products.push(shoppedProduct)

    return `Total Products ${this.products.length}`
} else {
    console.log(('the product is not avabile'));
}

 }
}
const e04Cart = new Cart()
e04Cart.addProduct(tracksuit)
console.log(e04Cart);