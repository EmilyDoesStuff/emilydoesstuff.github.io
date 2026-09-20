const bookPage = document.querySelector(".page-flip");
const nextButton = document.querySelector("#nextPage");
const previousButton = document.querySelector("#previousPage");

let isFlipped = false;


/* Turn the page */

function turnPage() {

    isFlipped = true;

    bookPage.classList.add("flipped");

}


/* Turn the page back */

function turnPageBack() {

    isFlipped = false;

    bookPage.classList.remove("flipped");

}


/* Click the page */

bookPage.addEventListener("click", function () {

    if (isFlipped) {

        turnPageBack();

    } else {

        turnPage();

    }

});


/* Next button */

nextButton.addEventListener("click", function () {

    turnPage();

});


/* Previous button */

previousButton.addEventListener("click", function () {

    turnPageBack();

});
