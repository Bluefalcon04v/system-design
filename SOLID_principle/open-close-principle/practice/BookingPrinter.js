export class BookingPrinter {
  print(booking, offer, total) {
    console.log(`
Number of Rooms Booked: ${booking.numberOfRooms}
-------------------------------------------\n
Customers
    `);
    booking.customer.persons.forEach((person) => {
      console.log(` Name\t ${person.name} \n Age\t ${person.age} \n`);
    });
    offer && console.log(`Offer is applied`);
    console.log(`
--------------------------------------------
Total Price: ${total}
    `);
  }
}
