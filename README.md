# Super Galactic Age Calculator

#### JavaScript based web app that converts a person's age to the age they would be based the year length for Mercury, Venus, Mars, and Jupiter, 3/16/2018.

#### _By Sara Hamilton_

## Description
_This is the Epicodus weekly project for week 1 of the JavaScript course. Its purpose is to demonstrate understanding of npm, and testing with Karma and Jasmine._

#### _Super Galactic Age Calculator_
* Takes in a person's age in Earth years and outputs their age in Mercury years, Venus years, Mars years, and Jupiter years.  It also calculates a person's age in relation to life expectancy.  It outputs a person's life expectancy adjusted to the year length for each planet and how much longer in each planet's years until they reach the average life expectancy or how far they have lived passed the average life expectancy.  

### Specifications
* Take a person’s age in years and convert it into seconds.
  * sample input: 30
  * sample output: 946,080,000
* Take two dates and determine the difference, in seconds, between the two.
  * sample input: 3-16-17, 3-16-18
  * sample output: 31,536,000
* Take in a person's age and return the age in Mercury years. (A Mercury year is .24 Earth years.)
  * sample input: 30
  * sample output: 125
* Take in a person's age and return the age in Venus years. (A Venus year is .62 Earth years.)
  * sample input: 30
  * sample output: 48
* Take in a person's age and return the age in Mars years. (A Mars year is 1.88 Earth years.)
  * sample input: 30
  * sample output: 15
* Take in a person's age and return the age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
  * sample input: 30
  * sample output: 2
* Determine how many years a user has left to live on each planet based on life expectancy.
  * sample input: Earth age: 30, life expectancy: 80 years
  * sample output: Mercury: 204 years, Venus: 79 years, Mars: 26 years, Jupiter: 4 years
* If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.
  * sample input: Earth age: 90, life expectancy: 80 years
  * sample output: Mercury: 42 years, Venus: 16 years, Mars: 5 years, Jupiter: <1 year


## Setup/Installation Requirements

* _Clone this GitHub repository_

```
git clone https://github.com/Sara-Hamilton/Super-Galactic-Age-Calculator.git
```

* _Move into the directory_

```
cd galactic-calculator
```

* _Install npm_

```
npm install
```
* _Run the program_

```
npm run start
```
* _Follow the prompts_

## Testing

* _Run tests_

```
npm run test
```
Tests run continuously. Results can be seen in both the CLI and the browser.  Go to http://localhost:9876/debug.html to refresh the browser view.  Tests can be stopped with Ctrl + C.

## Support and Contact Details

_To suggest changes, submit a pull request in the GitHub repository._

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* Karma
* Jasmine
* Node JS
* ES Lint
* Webpack
* Babel

### License

*MIT License*

Copyright (c) 2018 **_Sara Hamilton_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
