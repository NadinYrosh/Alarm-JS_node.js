var Alarm = function(alarmTime) {
  this.alarmTime = alarmTime;
};

// Alarm.prototype.check = function() {
//   if (this.alarmTime === moment().format('H:mm')){
//     alert("Get up!");
//   } else {
//     return false;
//   }
// };

Alarm.prototype.check = function() {
  console.log(this.alarmTime);
  var self = this;
  setInterval(function() {
    console.log(self.alarmTime);
    if (self.alarmTime === moment().format('H:mm')){
      alert("Get up!");
    } else {
      return false;
    }
  }, 1000);
};


exports.Alarm = Alarm;
