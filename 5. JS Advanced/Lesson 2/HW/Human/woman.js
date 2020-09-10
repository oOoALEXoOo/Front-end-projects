import Human from './human.js';

export default class Woman extends Human {
  constructor(nationality, language, fullName, age, height, weight, isMarried, hasChildren) {
    super(nationality, language, fullName, age, height, weight);
    this.isMarried = isMarried;
    this.hasChildren = hasChildren; // sure
    this.gender = 'female';
  }

  async toSpeak(what, howManySec) {
    await super.toSpeak(what, howManySec);

    console.log(`${this.fullName} has positively and emotively told: "${what}" by ${this.language}`);
    this.speaking = !this.speaking;
  }

  toHaveRest(howManyHours) {
    super.toHaveRest();

    this.goShopping(howManyHours);
  }

  goShopping(howManyHours) {
    console.log(`${this.fullName} has gone shopping`);

    setTimeout(() => {
      console.log(`${this.fullName} has finished shopping`);
      this.resting = !this.resting;
    }, howManyHours * 60 * 60 * 1000);
  }
}
