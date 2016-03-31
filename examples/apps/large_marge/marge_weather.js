'use strict';
var _ = require('lodash');
var requestPromise = require('request-promise');
var ENDPOINT = 'http://services.faa.gov/airport/status/'; // TODO: Replace placeholder with actual endpoint

function MargeWeather() {

}

// TODO: Change method to POST
// TODO: Remove Charlotte airport code from URI
// TODO: Handle timeframe
MargeWeather.prototype.postWeatherRequest = function(timeFrame) {
  var options = {
    method: 'GET',
    uri: ENDPOINT + 'CLT',
    json: true
  };

  return requestPromise(options);
};

// TODO: Provide more responses
MargeWeather.prototype.getAffirmation = function() {
  return 'An excellent choice.';
};

module.exports = MargeWeather;