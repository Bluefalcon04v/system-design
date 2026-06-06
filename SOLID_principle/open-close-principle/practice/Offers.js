export class Offers {
  OfferApplied(offerCode) {
    offerCode.offer();
  }
}

export class NewUser {
  offer() {
    console.log(`10Rs off Offer is Applied for New Users`);
    return 10;
  }
}
