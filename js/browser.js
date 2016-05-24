var moment = require('moment');

function Alarm(alarmTime) {
  this.alarmTime = alarmTime;
  this.momentTime = moment().format('LT');
};

exports.Alarm.prototype.currentTime = function() {
  this.displayCurrentTime = "The current time is: " + this.momentTime;
  return this.displayCurrentTime;
};

exports.Alarm.prototype.entry = function() {
  this.alarmSetTime = "The alarm is set to: " + this.alarmTime;
  return this.alarmSetTime;
};
