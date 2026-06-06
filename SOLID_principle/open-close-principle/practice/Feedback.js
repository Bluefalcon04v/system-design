export class FeedbackProcessor {
  process(feedbackStrategy, stars) {
    feedbackStrategy.effects(stars);
  }
}

export class PositiveFeedback {
  effects(stars) {
    console.log(`Thanks for the ${stars} stars and positive review`);
  }
}

export class NegativeFeedback {
  effects(stars) {
    console.log(`${stars} star neutral review`);
  }
}
