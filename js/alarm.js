var Alarm = function(alarmTime) {
  this.alarmTime = alarmTime;
  this.momentTime = moment().format('LTS');
};

Alarm.prototype.currentTime = function() {
  this.displayCurrentTime = "The current time is: " + this.momentTime;
  return this.displayCurrentTime;
};

Alarm.prototype.entry = function() {
  this.alarmSetTime = "The alarm is set to: " + this.alarmTime;
  return this.alarmSetTime;
};

exports.Alarm = Alarm;
