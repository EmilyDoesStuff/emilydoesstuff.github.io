document.addEventListener("DOMContentLoaded", function () {

    const turningPage = document.querySelector(".turning-page");

    if (!turningPage) {
        return;
    }

    turningPage.addEventListener("click", function () {

        turningPage.classList.toggle("flipped");

    });

});

