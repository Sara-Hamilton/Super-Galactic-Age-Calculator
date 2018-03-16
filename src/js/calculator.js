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

  planetExpectancy(planet) {
    const lifeExpectancy = 79;
    let factor = 0;
    switch (planet) {
      case 'Earth':
        factor = 1;
        break;
      case 'Mercury':
        factor = .24;
        break;
      case 'Venus':
        factor = .62;
        break;
      case 'Mars':
        factor = 1.88;
        break;
      case 'Jupiter':
        factor = 11.86;
        break;
      default:
        factor = 1;
    }
    let difference = Math.floor((lifeExpectancy - this.earthAge)/factor);
    if (difference > 0) {
      return `Your age is ${difference} years less than the average life expectancy in ${planet} years.`;
    } else if (difference === 0) {
      return `Your age is at the average life expectancy in ${planet} years.`
    } else {
      return `Your age is ${-difference} years past the average life expectancy in ${planet} years.`;
    }
  }

}
