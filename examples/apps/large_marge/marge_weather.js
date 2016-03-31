'use strict';
var _ = require('lodash');
var requestPromise = require('request-promise');
var ENDPOINT = 'http://large-marge-server.herokuapp.com/start';

function MargeWeather() {

}

// TODO: Handle timeframe
MargeWeather.prototype.postWeatherRequest = function(timeFrame) {
  var options = {
    method: 'POST',
    uri: ENDPOINT,
    json: true
  };

  return requestPromise(options);
};

// TODO: Provide more responses
MargeWeather.prototype.getAffirmation = function() {
  return 'Be sure and tell em, Large Marge sent ya.';
};

module.exports = MargeWeather;