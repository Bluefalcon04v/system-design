class PaymentProcessor {
  process(paymentMethod, amount) {
    paymentMethod.pay(amount);
  }
}

class Paytm {
  pay(amount) {
    console.log(`Payment is processed of ${amount} via Paytm`);
  }
}

class GPay {
  pay(amount) {
    console.log(`Payment is processed of ${amount} via GPay`);
  }
}

const processor = new PaymentProcessor();

const paytm = new Paytm();
processor.process(paytm, 5000);
