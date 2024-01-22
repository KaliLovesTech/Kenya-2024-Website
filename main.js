document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer Setup
    var countdownDate = new Date("Dec 1, 2024 00:00:00").getTime();
    var countdownFunction = setInterval(function () {
        var now = new Date().getTime();
        var distance = countdownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById("timer").innerHTML = "<span class='timer-days'>" + days + "</span> days left until December 2024";

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("timer").innerHTML = "The adventure has begun!";
        }
    }, 1000);

    // Form Submission Handling
    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted!");
    });
});
