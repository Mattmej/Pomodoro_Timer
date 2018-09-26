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
})