$(document).ready(function() {
  $('#alarmTimeEntry').submit(function(event) {
    event.preventDefault();
    var alarmTimer = $('#setAlarmClock').val();
    var newAlarm = new Alarm(alarmTimer);
    $("#alarmSetTime").append("<h3>Alarm time set to: " + newAlarm.entry() + "</h3>");
  });
});
