/* 

Game Plan:

Settings section
    * Settings will be a form.
    * Explanation of timing system will be displayed at the top of settings form.

Timer section
    * Timer will be displayed at top of screen, settings at bottom of screen.
    * Clicking the "pause" buttons on the screen will change the button to "resume."
    * Clicking "resume" will change the button to "pause."
    * Number of "counted breaks" will be displayed above the timer.


*/

// redirect to settings page when "change settings" button is pressed
$("#change-settings").on("click", function() {
    window.location.href = "settings.html";
});

$("#set-timer-button").on("click", function() {
  setPomodoro();
  // $(this).removeAttr("id");
  // $(this).attr('id', 'play-pause-button');
});

// $("#play-pause-button").on('click', function() {
//   alert("Started!");
//   console.log("id changed!");
// })

$('#button-holder').on('click', '#play-pause-button', function() {

  alert("Started!");
  console.log("id changed!");
})

function setPomodoro() {

  var date = new Date(null);
  date.setSeconds(10);
  var timeString = date.toISOString();
  var timeStringShort = date.toISOString().substr(14, 5);
  console.log(timeString);
  console.log(timeStringShort);


  $("#time").html(timeStringShort);
  $("#set-timer-button").html("Start");
  createPlayButton();
  // $("#set-timer-button").remove("#set-timer-button");

};

function createPlayButton() {
  $('#set-timer-button').remove();
  $('#button-holder').prepend('<button type="button" class="btn btn-success" id="play-pause-button">Start</button>');
  // $('#button-holder').addClass("btn btn-success");
}


// $(".timerSettings").validate();

// $( "#timerSettings" ).validate({
//     // submitHandler: function(form) {
//     //     form.submit();
//     // },
//     rules: {
//       field: {
//         required: true,
//         digits: true
//       }
//     }
//   });