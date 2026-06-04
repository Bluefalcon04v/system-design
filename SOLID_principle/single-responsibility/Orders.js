export class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// right now this Order Class have multiple reason to change like Order, Invoice, Process Payments etc.
// export class Orders {
//   products = [];

//   addProducts(product) {
//     this.products.push(product)
//   }

//   getProducts() {
//     return this.products;
//   }

//   removeProducts(productId) {
//     this.products = this.products.filter(product => productId !== product.id);
//   }

//   calculatePricing() {
//     return this.products.reduce((total, product) => total + product.price, 0);
//   }

//   generateInvoice() {
//     console.log(`
// Invoice Date = ${new Date().toDateString()}
// ----------------------------------------------
// Product Name\tPrice
//       `)

//     this.products.forEach((i) => {
//       console.log(`${i.name}\t\t ${i.price} `)
//     })
//     console.log('----------------------------------------------')
//     console.log(`Total= ${this.calculatePricing()}`)
//   }

//   processPayment() {
//     console.log('Payment Process...');
//     console.log('Payment Successful');
//     console.log('-----------------------------------------------');
//     console.log('Email Sent');
//     console.log('ThankYou');
//   }
// }

// to make it Single Responsible System it each one the reasons to change should have different Class
export class Orders {
  products = [];

  addProducts(product) {
    this.products.push(product);
  }
  getProducts() {
    return this.products;
  }
  removeProduct(productId) {
    this.products = this.products.filter(product => product.id !== productId);
  }
}
