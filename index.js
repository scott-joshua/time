'use strict';
var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Denver");
    callback(null, {
        statusCode: '200',
        body:  JSON.stringify({ time:currentTime.getTime()}),
    });
};
