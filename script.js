document.addEventListener("DOMContentLoaded", function () {

    const page = document.querySelector(".turning-page");

    if (!page) return;

    page.addEventListener("click", function () {

        page.classList.toggle("flipped");

    });

});
