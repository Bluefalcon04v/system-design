import { Booking, Customer, Person } from "./RoomBooking.js";
import { PaymentCalculator } from "./PaymentCalculator.js";
import { BookingPrinter } from "./BookingPrinter.js";
import { FeedbackProcessor, NegativeFeedback } from "./Feedback.js";
import { NewUser, Offers } from "./Offers.js";

let person1 = new Person("Ben", 21);
let person2 = new Person("Sam", 22);

let customer = new Customer([person1, person2]);
let booking = new Booking(2, customer);

let paymentCalculator = new PaymentCalculator();
let total = paymentCalculator.calculate(booking);

let offer = new Offers();
let discount = offer.OfferApplied(new NewUser());

let bookingPrint = new BookingPrinter();
bookingPrint.print(booking, discount, total - discount);

let feedbackProcessor = new FeedbackProcessor();
feedbackProcessor.process(new NegativeFeedback(), 4);
