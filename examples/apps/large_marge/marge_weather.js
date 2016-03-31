'use strict';
var _ = require('lodash');
var requestPromise = require('request-promise');
var ENDPOINT = 'PLACEHOLDER';

function MargeWeather() {

}

MargeWeather.prototype.postWeatherRequest = function() {
  var options = {
    method: 'POST',
    uri: ENDPOINT,
    json: true
  };

  return requestPromise(options);
}

module.exports = MargeWeather;