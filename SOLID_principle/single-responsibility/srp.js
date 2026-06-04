import { CalculatePricing } from "./CalculatePricing.js";
import { GenerateInvoice } from "./GenerateInvoice.js";
import { Orders, Product } from "./Orders.js";
import { PaymentProcessor } from "./PaymentProcessor.js";

let product1 = new Product(1, "Laptop", 1000);
let product2 = new Product(2, "Desktop", 2000);
let product3 = new Product(3, "Mobile", 500);

let orders = new Orders();
orders.addProducts(product1)
orders.addProducts(product2)
orders.addProducts(product3)

let totalPricing = new CalculatePricing()
let total = totalPricing.calculatePricing(orders.getProducts())

let invoice = new GenerateInvoice();
invoice.generateInvoice(orders.getProducts(), total);

let paymentProcess = new PaymentProcessor();
paymentProcess.processPayment(orders)
