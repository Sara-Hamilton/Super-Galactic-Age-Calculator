import { Calculator } from './../src/js/calculator.js';

describe('Calculator', function() {
  let reusableCalculator;

  beforeEach(function() {
    reusableCalculator = new Calculator(30);
  });

  it('will convert years to seconds', function() {
    let result = reusableCalculator.convertToSeconds();
    expect(result).toEqual(30);
  })
});
