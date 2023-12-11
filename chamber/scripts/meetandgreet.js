document.addEventListener("DOMContentLoaded", function () {
    var today = new Date();
    var dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Check if today is Monday, Tuesday, or Wednesday
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        var banner = document.getElementById("chamberBanner");
        banner.style.display = "block";
    }
});

function closeBanner() {
    var banner = document.getElementById("chamberBanner");
    banner.style.display = "none";
}