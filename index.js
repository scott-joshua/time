'use strict';

var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Denver");
    callback(null, {
        statusCode: '200',
        headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers":"Content-Type, client_id, client_secret"},
        body:  JSON.stringify({ time:currentTime.getTime()}),
    });
};

exports.options = (event, context, callback) => {
    callback(null, {
        statusCode: '200',
        headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "OPTIONS, GET", "Access-Control-Allow-Headers":"Content-Type, client_id, client_secret"},
    });
};

