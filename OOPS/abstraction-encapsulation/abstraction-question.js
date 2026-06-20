class PaymentProcessor {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  process(paymentMethod, amount) {
    paymentMethod = paymentMethod.toLowerCase();

    this.validateMethod(paymentMethod);
    this.validateAmount(amount);
    this.validateBalance(amount);

    if (paymentMethod === "upi") {
      this.payViaUPI(amount);
    } else if (paymentMethod === "card") {
      this.payViaCard(amount);
    } else if (paymentMethod === "wallet") {
      this.payViaWallet(amount);
    }

    this.deductBalance(amount);
  }

  validateMethod(method) {
    const allowedMethods = ["upi", "card", "wallet"];
    if (!allowedMethods.includes(method)) {
      throw new Error(`${method} Payment Method is invalid`);
    }
  }

  validateAmount(amount) {
    if (amount <= 0) {
      throw new Error(`${amount} is not valid give a valid amount `);
    }
  }

  validateBalance(amount) {
    if (amount > this.balance) {
      throw new Error(`Insufficient Balance in account`);
    }
  }

  deductBalance(amount) {
    this.balance -= amount;
  }

  payViaUPI(amount) {
    console.log(`Processing ₹${amount} payment via UPI`);
  }

  payViaCard(amount) {
    console.log(`Processing ₹${amount} payment via Card`);
  }

  payViaWallet(amount) {
    console.log(`Processing ₹${amount} payment via Wallet`);
  }

  getBalance() {
    return this.balance;
  }
}

const paymentProcessor = new PaymentProcessor(5000);

console.log(paymentProcessor.process("UPI", 1000));
console.log(paymentProcessor.getBalance());
