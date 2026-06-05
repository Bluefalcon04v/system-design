class PaymentProcessor {
  payment(amount, type) {
    if (type === "paytm") {
      console.log(`Payment Type: Paytm\t Amount: ${amount}`);
    } else if (type === "phonepe") {
      console.log(`Payment Type: PhonePe\t Amount: ${amount}`);
    } else {
      console.log("Invalid Payment type");
    }
  }
}

let pay = new PaymentProcessor();
pay.payment(4000, "paytm");

// right now in this if we have to implement a new Payment Type then we have to again change the "class PaymentProcessor" so it is violating Open-Close Principle
