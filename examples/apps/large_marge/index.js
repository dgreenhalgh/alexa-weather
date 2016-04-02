'use strict';
module.change_code = 1;
var APP_ID = 'amzn1.echo-sdk-ams.app.7902de95-3e5f-4121-a6e7-f6c1bc725a5b';
var Alexa = require('alexa-app');
var skill = new Alexa.app('large_marge');
var MargeWeather = require('./marge_weather');
var _ = require('lodash');

var utterancesMethod = skill.utterances;
skill.utterances = function() {
  return utterancesMethod().replace(/\{\-\|/g, '{');
};

// TODO: Handle timeframe
var reprompt = 'Ask me what you should wear today.';

// TODO: Handle timeframe
skill.launch(function(request, response) {
  var prompt = 'For hot fashion tips, ask me what you should wear today.';

  response.say(prompt).reprompt(reprompt).shouldEndSession(false);
});

skill.intent('weatherIntent', {
    'slots': {
      'TIMEFRAME': 'TIMES'
    },
    'utterances': [
      '{dress me} {-|TIMEFRAME}', 
      '{what} {|should I |I should |to} {wear} {-|TIMEFRAME}',
      '{clothe me} {|in your image} {-|TIMEFRAME}',
      '{fashion} {|me} {|in your image} {-|TIMEFRAME}',
      '{style} {|me} {|in your image} {-|TIMEFRAME}',
      '{vogue} {-|TIMEFRAME}',
      '{winning} {-|TIMEFRAME}',
      '{i\'m naked} {-|TIMEFRAME}'
    ]
  },
  function(request, response) {
    var timeframe = request.slot('TIMEFRAME');
    var margeWeather = new MargeWeather();
    
    margeWeather.postWeatherRequest(timeframe).then(function() {
      response.say(margeWeather.getAffirmation()).send();
    }).catch(function(err) {
      console.log(err.statusCode);
      var prompt = 'Sorry, something went wrong.';
      response.say(prompt).reprompt(reprompt).shouldEndSession(false).send();
    });

    return false;
  }
);

// TODO: locationIntent

// TODO: weatherForLocationIntent

module.exports = skill;