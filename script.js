document.addEventListener("DOMContentLoaded", function () {

    const bookPage = document.querySelector(".page-flip");
    const nextButton = document.querySelector("#nextPage");
    const previousButton = document.querySelector("#previousPage");

    if (!bookPage) {
        return;
    }

    function nextPage() {
        bookPage.classList.add("flipped");
    }

    function previousPage() {
        bookPage.classList.remove("flipped");
    }

    bookPage.addEventListener("click", function () {
        bookPage.classList.toggle("flipped");
    });

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            nextPage();
        });
    }

    if (previousButton) {
        previousButton.addEventListener("click", function () {
            previousPage();
        });
    }

});
