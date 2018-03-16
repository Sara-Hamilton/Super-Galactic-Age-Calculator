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
    return difference;
  }

  mercuryExpectancy() {
    const lifeExpectancy = 79;
    let difference = Math.floor((lifeExpectancy - this.earthAge)/.24);
    return difference;
  }

}
