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

  planetFactor(planet) {
    let factor = 0;
    switch (planet) {
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
    return factor;
  }

  ageOnPlanet(planet) {
    let factor = this.planetFactor(planet);
    let planetAge = Math.floor(this.earthAge/factor);
    return planetAge;
  }

  planetExpectancy(planet) {
    const lifeExpectancy = 79;
    let factor = this.planetFactor(planet);
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
