export default class Human {
  constructor(nationality, language, fullName, age, height, weight) {
    this.nationality = nationality;
    this.language = language;
    this.fullName = fullName;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.speaking = false;
    this.walking = false;
    this.running = false;
    this.sleeping = false;
    this.resting = false;
    this.speed = 0;
  }

  async toSpeak(what, howManySec) {
    if (this.sleeping) return;

    this.speaking = !this.speaking;
    console.log(`${this.fullName}'s begun speaking and everyone's politely listening`);

    await new Promise((resolve) => {
      setTimeout(() => resolve, howManySec * 1000);
    });
  }

  toWalk(withSpeed, howManySec) {
    if (this.sleeping) return;

    this.speed = withSpeed;
    this.walking = !this.walking;
    console.log(`${this.fullName} is walking with speed ${this.speed}...`);

    setTimeout(() => {
      console.log(`${this.fullName} has stopped walking`);
      this.walking = !this.walking;
      this.speed = 0;
    }, howManySec * 1000);
  }

  toRun(withSpeed, howManySec) {
    if (this.sleeping) return;

    this.speed = withSpeed;
    this.running = !this.running;
    console.log(`${this.fullName} is running with speed ${this.speed}...`);

    setTimeout(() => {
      console.log(`${this.fullName} has stopped running`);
      this.running = !this.running;
      this.speed = 0;
    }, howManySec * 1000);
  }

  toSleep(howManyHours) {
    this.sleeping = !this.sleeping;
    console.log(`${this.fullName} is sleeping zzz...`);

    setTimeout(() => {
      console.log(`${this.fullName} has waken up`);
      this.sleeping = !this.sleeping;
    }, howManyHours * 60 * 60 * 1000);
  }

  toDoSomething(what, howManyHours) {
    if (this.sleeping) return;

    console.log(`${this.fullName} has started ${what}`);

    setTimeout(() => {
      console.log(`${this.fullName} has stopped ${what}`);
    }, howManyHours * 60 * 60 * 1000);
  }

  toHaveRest() {
    this.resting = !this.resting;
    console.log(`${this.fullName} has started resting`);
  }
}
