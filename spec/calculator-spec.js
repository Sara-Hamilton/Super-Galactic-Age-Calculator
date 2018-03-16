import { Calculator } from './../src/js/calculator.js';

describe('Calculator', function() {
  let reusableCalculator;

  beforeEach(function() {
    reusableCalculator = new Calculator(30);
  })

  it('will convert years to seconds', function() {
    let result = reusableCalculator.convertToSeconds();
    expect(result).toEqual(946080000);
  })

  it('will return the difference in seconds between two dates', function(){
    let date1 = new Date('April 1, 2010');
    let date2 = new Date('April 1, 2011');
    let result = reusableCalculator.secondsBetweenDates(date1, date2);
    expect(result).toEqual(31536000);
  })

  it('will convert Earth age to Mercury age', function(){
    let result = reusableCalculator.ageOnMercury();
    expect(result).toEqual(125);
  })

  it('will convert Earth age to Venus age', function(){
    let result = reusableCalculator.ageOnVenus();
    expect(result).toEqual(48);
  })

  it('will convert Earth age to Mars age', function(){
    let result = reusableCalculator.ageOnMars();
    expect(result).toEqual(15);
  })

  it('will convert Earth age to Jupiter age', function(){
    let result = reusableCalculator.ageOnJupiter();
    expect(result).toEqual(2);
  })

  it('will return difference between current age and life expectancy', function(){
    let result = reusableCalculator.compareToEarthExpectancy();
    expect(result).toEqual(49);
  })
})
