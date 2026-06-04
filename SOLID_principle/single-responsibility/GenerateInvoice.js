export class GenerateInvoice {
  generateInvoice(products, amount) {
    console.log(`
Invoice Date = ${new Date().toDateString()}
----------------------------------------------
Product Name\tPrice
    `);

    products.forEach((i) => {
      console.log(`${i.name}\t\t ${i.price} `);
    });
    console.log("----------------------------------------------");
    console.log(`Total= ${amount}`);
  }
}
