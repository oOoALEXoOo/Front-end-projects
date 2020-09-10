import Human from './human.js';

export default class Man extends Human {
  constructor(nationality, language, fullName, age, height, weight, isMarried, wasInAnArmy) {
    super(nationality, language, fullName, age, height, weight);
    this.isMarried = isMarried;
    this.wasInAnArmy = wasInAnArmy;
    this.gender = 'male';
  }

  async toSpeak(what, howManySec) {
    await super.toSpeak(what, howManySec);

    console.log(`${this.fullName} has clearly and straightly told: "${what}" by ${this.language}`);
    this.speaking = !this.speaking;
  }

  toHaveRest(howManyHours) {
    super.toHaveRest();

    this.watchFootball(howManyHours);
  }

  watchFootball(howManyHours) {
    console.log(`${this.fullName} has started watching football`);

    setTimeout(() => {
      console.log(`${this.fullName} has watched football`);
      this.resting = !this.resting;
    }, howManyHours * 60 * 60 * 1000);
  }
}
