'use strict'
class Sale {
  constructor(price) {
    ;[this.decoratorsList, this.price] = [[], price]
  }

  decorate(decorator) {
    if (!Sale[decorator]) throw new Error(`decorator does not exist: ${decorator}`)
    this.decoratorsList.push(Sale[decorator])
  }

  static async remotePrice(price) {
    return await Promise.all([fetch(`/api/convert/${price}`)])
  }

  getPrice() {
    for (let decorator of this.decoratorsList) {
      this.price = decorator(this.price)
    }
    return this.price.toFixed(2)
  }

  static quebec(price) {
    // this is a comment
    return price + price * 7.5 / 100
  }

  static fedtax(price) {
    return price + price * 5 / 100
  }
}

let sale = new Sale(100)
const test = true
var x = y
sale.decorate('fedtax')
sale.decorate('quebec')
window.addEventListener()
console.log(sale.getPrice()) //112.88

getPrice()
