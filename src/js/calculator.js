export class Calculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  convertToSeconds() {
    return (this.earthAge * 31536000);
  }

  secondsBetweenDates(date1, date2) {
    let difference = Math.abs(date1 - date2)/1000;
    return difference;
  }

  ageOnMercury() {
    let mercuryAge = Math.floor(this.earthAge/.24);
    return mercuryAge;
  }

  ageOnVenus() {
    let venusAge = Math.floor(this.earthAge/.62);
    return venusAge;
  }

  ageOnMars() {
    let marsAge = Math.floor(this.earthAge/1.88);
    return marsAge;
  }

  ageOnJupiter() {
    let jupiterAge = Math.floor(this.earthAge/11.86);
    return jupiterAge;
  }

  compareToEarthExpectancy() {
    const lifeExpectancy = 79;
    let difference = lifeExpectancy - this.earthAge;
    if (difference >= 0) {
      return `Your age is ${difference} years less than the average life expectancy.`;
    } else {
      return `Your age is ${-difference} years past the average life expectancy.`;
    }
  }

  mercuryExpectancy() {
    const lifeExpectancy = 79;
    let difference = Math.floor((lifeExpectancy - this.earthAge)/.24);
    return difference;
  }

  venusExpectancy() {
    const lifeExpectancy = 79;
    let difference = Math.floor((lifeExpectancy - this.earthAge)/.62);
    return difference;
  }

  marsExpectancy() {
    const lifeExpectancy = 79;
    let difference = Math.floor((lifeExpectancy - this.earthAge)/1.88);
    return difference;
  }

  jupiterExpectancy() {
    const lifeExpectancy = 79;
    let difference = Math.floor((lifeExpectancy - this.earthAge)/11.86);
    return difference;
  }

}
