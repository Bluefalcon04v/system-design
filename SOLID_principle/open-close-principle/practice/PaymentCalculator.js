export class PaymentCalculator {
    calculate(booking){
        return booking.numberOfRooms * 1000
    }
}
