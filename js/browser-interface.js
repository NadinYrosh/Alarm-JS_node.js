var Alarm = require('./../js/alarm.js').Alarm;

$(document).ready(function() {
  setInterval(displayTime, 1000);

  $('#alarmTimeEntry').submit(function(event) {
    event.preventDefault();
    var alarmTimer = $('#setAlarmClock').val();
    var newAlarm = new Alarm(alarmTimer);
    $("#alarmSetTime").append("<h3> Your alarm set to: " + newAlarm.alarmTime + "</h3>");

    console.log(newAlarm);
    newAlarm.check();

  });
});

displayTime = function() {
  $('#time').text(moment().format('H:mm'));
};
