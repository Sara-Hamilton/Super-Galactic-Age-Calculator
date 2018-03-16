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
    let result = reusableCalculator.ageOnPlanet("Mercury");
    expect(result).toEqual(125);
  })

  it('will convert Earth age to Venus age', function(){
    let result = reusableCalculator.ageOnPlanet("Venus");
    expect(result).toEqual(48);
  })

  it('will convert Earth age to Mars age', function(){
    let result = reusableCalculator.ageOnPlanet("Mars");
    expect(result).toEqual(15);
  })

  it('will convert Earth age to Jupiter age', function(){
    let result = reusableCalculator.ageOnPlanet("Jupiter");
    expect(result).toEqual(2);
  })

  it('will return difference between current age and life expectancy on Earth', function(){
    let result = reusableCalculator.planetExpectancy("Earth");
    expect(result).toEqual("Your age is 49 years less than the average life expectancy in Earth years.")
  })

  it('will return a message if age equals life expectancy on Earth', function(){
    let seniorCalculator = new Calculator(79);
    let result = seniorCalculator.planetExpectancy("Earth");
    expect(result).toEqual("Your age is at the average life expectancy in Earth years.");
  })

  it('will return a message if age exceeds life expectancy on Earth', function(){
    let seniorCalculator = new Calculator(90);
    let result = seniorCalculator.planetExpectancy("Earth");
    expect(result).toEqual("Your age is 11 years past the average life expectancy in Earth years.");
  })

  it('will return difference between current age and life expectancy in Mercury years', function(){
    let result = reusableCalculator.planetExpectancy("Mercury");
    expect(result).toEqual("Your age is 204 years less than the average life expectancy in Mercury years.");
  })

  it('will return a message if age equals life expectancy on Mercury', function(){
    let seniorCalculator = new Calculator(79);
    let result = seniorCalculator.planetExpectancy("Mercury");
    expect(result).toEqual("Your age is at the average life expectancy in Mercury years.");
  })

  it('will return a message if age exceeds life expectancy on Mercury', function(){
    let seniorCalculator = new Calculator(90);
    let result = seniorCalculator.planetExpectancy("Mercury");
    expect(result).toEqual("Your age is 46 years past the average life expectancy in Mercury years.");
  })

  it('will return difference between current age and life expectancy in Venus years', function(){
    let result = reusableCalculator.planetExpectancy("Venus");
    expect(result).toEqual("Your age is 79 years less than the average life expectancy in Venus years.");
  })

  it('will return a message if age equals life expectancy on Venus', function(){
    let seniorCalculator = new Calculator(79);
    let result = seniorCalculator.planetExpectancy("Venus");
    expect(result).toEqual("Your age is at the average life expectancy in Venus years.");
  })

  it('will return a message if age exceeds life expectancy on Venus', function(){
    let seniorCalculator = new Calculator(90);
    let result = seniorCalculator.planetExpectancy("Venus");
    expect(result).toEqual("Your age is 18 years past the average life expectancy in Venus years.");
  })

  it('will return difference between current age and life expectancy in Mars years', function(){
    let result = reusableCalculator.planetExpectancy("Mars");
    expect(result).toEqual("Your age is 26 years less than the average life expectancy in Mars years.");
  })

  it('will return a message if age equals life expectancy on Mars', function(){
    let seniorCalculator = new Calculator(79);
    let result = seniorCalculator.planetExpectancy("Mars");
    expect(result).toEqual("Your age is at the average life expectancy in Mars years.");
  })

  it('will return a message if age exceeds life expectancy on Mars', function(){
    let seniorCalculator = new Calculator(90);
    let result = seniorCalculator.planetExpectancy("Mars");
    expect(result).toEqual("Your age is 6 years past the average life expectancy in Mars years.");
  })

  it('will return difference between current age and life expectancy in Jupiter years', function(){
    let result = reusableCalculator.planetExpectancy("Jupiter");
    expect(result).toEqual("Your age is 4 years less than the average life expectancy in Jupiter years.");
  })

  it('will return a message if age equals life expectancy on Jupiter', function(){
    let seniorCalculator = new Calculator(79);
    let result = seniorCalculator.planetExpectancy("Jupiter");
    expect(result).toEqual("Your age is at the average life expectancy in Jupiter years.");
  })

  it('will return a message if age exceeds life expectancy on Jupiter', function(){
    let seniorCalculator = new Calculator(90);
    let result = seniorCalculator.planetExpectancy("Jupiter");
    expect(result).toEqual("Your age is 1 years past the average life expectancy in Jupiter years.");
  })

  it('will return difference between current age and life expectancy in Jupiter years', function(){
    let result = reusableCalculator.planetExpectancy("Jupiter");
    expect(result).toEqual("Your age is 4 years less than the average life expectancy in Jupiter years.");
  })
})
