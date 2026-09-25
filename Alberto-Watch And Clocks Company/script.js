$(document).ready(function () {
    console.log("jQuery is working!");
    let visitors = localStorage.getItem("visitorCount");

    if (visitors === null) {
        visitors = 1;
    } else {
        visitors = Number(visitors) + 1;
    }

    localStorage.setItem("visitorCount", visitors);

    $("#visitorNumber").text(visitors);

    // Update the current date and time
    function updateDateTime() {
    let now = new Date();

    let date = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    let time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    });

    $("#currentDate").text(date);
    $("#currentTime").text(time);
}

updateDateTime();

setInterval(updateDateTime, 1000);

// Product filtering
$(".category-btn").click(function () {

    let category = $(this).data("category");

    $(".category-btn").removeClass("active");
    $(this).addClass("active");

    $(".product-card").each(function () {

        let productCategory = $(this).data("category");

        if (category === "all" || productCategory === category) {
            $(this).parent().show();
        } else {
            $(this).parent().hide();
        }

    });

});

// Technology information
let technologies = [
    {
        name: "Quartz Movement",
        icon: "bi bi-clock",
        description: "Quartz movement uses a battery and quartz crystal to provide accurate and reliable timekeeping.",
        precision: "Very High",
        performance: "Reliable"
    },
    {
        name: "Automatic Movement",
        icon: "bi bi-gear",
        description: "Automatic movement uses the natural motion of the wearer to power the watch without a battery.",
        precision: "High",
        performance: "Long Lasting"
    },
    {
        name: "Digital Technology",
        icon: "bi bi-display",
        description: "Digital technology displays time electronically and provides clear and easy-to-read information.",
        precision: "High",
        performance: "Modern"
    },
    {
        name: "Silent Technology",
        icon: "bi bi-volume-mute",
        description: "Silent technology reduces ticking sounds for a quieter and more comfortable experience.",
        precision: "High",
        performance: "Quiet"
    }
];

$(".learn-more").click(function () {

    let selectedTech = $(this).data("tech");

    let tech = technologies.find(function (item) {
        return item.name.toLowerCase().includes(selectedTech);
    });

    $("#modalTechTitle").text(tech.name);
    $("#modalTechIcon").attr("class", tech.icon);
    $("#modalTechHeading").text(tech.name);
    $("#modalTechDescription").text(tech.description);
    $("#modalPrecision").text(tech.precision);
    $("#modalPerformance").text(tech.performance);

});

// Contact form validation
$("#contactForm").submit(function (event) {

    event.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Thank you! Your message has been sent.");
        $("#contactForm")[0].reset();
    }

});
});
// Geolocation functionality
$("#findLocation").click(function () {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            function (position) {

                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;

                alert(
                    "Your location was found!\n" +
                    "Latitude: " + latitude + "\n" +
                    "Longitude: " + longitude
                );

            },
            function () {
                alert("Unable to find your location.");
            }
        );

    } else {
        alert("Geolocation is not supported by your browser.");
    }

});