import { BookingPrinter } from "./BookingPrinter.js";
import { Feedback } from "./Feedback.js";
import { Offers } from "./Offers.js";
import { PaymentCalculator } from "./PaymentCalculator.js";
import { Booking, Customer, Person } from "./RoomBooking.js";

let person1 = new Person("Ben", 21);
let person2 = new Person("Sam", 22);

let customer = new Customer([person1, person2]);
let booking = new Booking(2, customer);

let paymentCalculator = new PaymentCalculator();
let total = paymentCalculator.calculate(booking);

let price = new Offers();
let discount = price.offer(total);

let bookingPrint = new BookingPrinter();
bookingPrint.print(booking, discount, total - discount);

let review = new Feedback();
review.feedback(4);
