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
})