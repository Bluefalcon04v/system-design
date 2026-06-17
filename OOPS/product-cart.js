/*
    Requirements 
    - Add items 
    - Remove items 
    - update quantity of chosen item 
    - get cart items 
    - get total price 
    - don't let to update cart items directly
*/

class ProductCart {
  #items;

  constructor() {
    this.#items = new Map();
  }

  add(product, quantity = 1) {
    this.#validateProduct(product);
    this.#validateQuantity(quantity);

    if (this.#items.has(product.id)) {
      const existing = this.#items.get(product.id);

      this.#items.set(product.id, {
        ...existing,
        quantity: existing.quantity + quantity,
      });
    } else {
      this.#items.set(product.id, {
        product: { ...product },
        quantity,
      });
    }
  }

  remove(productId) {
    this.#validateProduct(productId);
    this.#items.delete(productId);
  }

  update(productId, quantity) {
    this.#validateQuantity(quantity);

    if (!this.#items.has(productId)) {
      throw new Error("Product doesn't exists");
    }
    const existingItems = this.#items.get(productId);

    this.#items.set(productId, {
      ...existingItems,
      quantity,
    });
  }

  getItems() {
    const products = [];

    for (const { product } of this.#items.values()) {
      products.push({ ...product });
    }

    return products;
  }

  getTotal() {
    let total = 0;
    for (const { product, quantity } of this.#items.values()) {
      total += product.price * quantity;
    }
    return total;
  }

  #validateProduct(product) {
    if (!product || !product.id || !product.name || product.price <= 0) {
      throw new Error("Invalid Product");
    }
  }

  #validateQuantity(quantity) {
    if (!Number.isInteger(quantity) || quantity <= 0) {
      throw new Error("Quantity must be positive integer");
    }
  }
}

let cart = new ProductCart();
cart.add({ id: 1, name: "Iphone", price: 1000 });
cart.add({ id: 2, name: "Moto", price: 500 });

console.log(cart.getItems());
console.log(cart.getTotal());
