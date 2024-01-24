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

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        var data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            travelers: document.getElementById("travelers").value,
            dateFrom: document.getElementById("dates").value,
            activities: document.getElementById("activities").value,
        };

        var formData = new FormData();
        formData.append("entry.531720767", data.name);
        formData.append("entry.1472744669", data.email);
        formData.append("entry.775161060", data.travelers);
        formData.append("entry.1068319214", data.dates);
        formData.append("entry.338419322", data.activities);

        fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfmznrlrfNPvcjqn6o_yVLtnbGKv7YH8rfvk9Mnn6AEKgPRww/formResponse", {
            method: "POST",
            mode: "no-cors", // Set the mode to 'no-cors'
            body: formData,
        })
            .then(() => {
                alert("Thank you! Your response has been submitted.");
                document.getElementById("contactForm").reset();
                console.error("Form submission failed");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
});
