document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       ✿ YOUR DIARY ENTRIES ✿

       Write your entries below.

       Each "pages" item is ONE physical page.

       If an entry is short, use one page.
       If it's long, split it into multiple pages.
       ========================================= */

    const entries = [

        {
            date: "September 20, 2026",
            title: "dear diary...",
            pages: [ Well, this is my first entry.
                    I don't know if this is going to work, but lets see, shall we? 
                    My name is Emily, and I am 28. I live with my boyfriend, 
                    His name is Will, and he is 27. 
                    We have a mini labradoodle named Zeus. He is 7 years old
            ]
        },

        /*
        ✿ COPY THIS ENTIRE BLOCK FOR YOUR NEXT ENTRY ✿

        {
            date: "September 21, 2026",
            title: "today...",
            pages: [
                `Write your next entry here.`
            ]
        },

        */

    ];


    /* =========================================
       ✿ CUTE STICKERS ✿
       ========================================= */

    const stickers = [
        "🦋",
        "🌸",
        "🌷",
        "🪻",
        "🌼",
        "🌺",
        "💗",
        "💕",
        "💞",
        "✨",
        "💫",
        "🪽",
        "🌙",
        "☁️",
        "🌿",
        "🍓",
        "🍒",
        "🧚"
    ];


    /* =========================================
       BOOK
       ========================================= */

    const book = document.querySelector(".book");
    const turningPage = document.querySelector(".turning-page");

    if (!book || !turningPage) return;


    /*
       For now, we'll keep the existing book
       structure and put your first entry
       onto the first page.
    */

    const leftPaper = document.querySelector(".left-page .paper");

    if (leftPaper && entries.length > 0) {

        const entry = entries[0];

        leftPaper.innerHTML = `
            <span class="sticker sticker-left">${stickers[0]}</span>

            <div class="diary-entry">

                <div class="entry-date">
                    ${entry.date}
                </div>

                <h2>
                    ${entry.title}
                </h2>

                <p>
                    ${entry.pages[0].replace(/\n/g, "<br>")}
                </p>

            </div>
        `;

    }


    /* =========================================
       PAGE FLIPPING + STICKERS
       ========================================= */

    const frontSticker =
        turningPage.querySelector(".front .sticker");

    const backSticker =
        turningPage.querySelector(".back .sticker");

    let stickerNumber = 0;

    turningPage.addEventListener("click", function () {

        stickerNumber++;

        if (frontSticker) {
            frontSticker.textContent =
                stickers[stickerNumber % stickers.length];
        }

        if (backSticker) {
            backSticker.textContent =
                stickers[(stickerNumber + 1) % stickers.length];
        }

        turningPage.classList.toggle("flipped");

    });

});
