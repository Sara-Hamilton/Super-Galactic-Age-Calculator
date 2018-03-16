import { Calculator } from './js/calculator.js';
import './styles.css';

$(document).ready(function(){
  $('#calculatorForm').submit(function(event) {
    event.preventDefault();
    let birthday = $('#birthday').val();
    let age = ((Date.now() - Date.parse(birthday)))/31536000000;

    let galacticCalculator = new Calculator(age);

    let planets = ["Earth", "Mercury", "Venus", "Mars", "Jupiter"];

    planets.forEach(function(planet) {
      let planetAge = galacticCalculator.ageOnPlanet(planet);
      $("#" + planet + "Age").text(planetAge);
    });

    planets.forEach(function(planet) {
      let planetExpectancy = galacticCalculator.planetExpectancy(planet);
      $("#" + planet + "Expectancy").text(planetExpectancy);
    });

    $("#results").show();

  });
});
