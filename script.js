document.addEventListener("DOMContentLoaded", function () {

    const page = document.querySelector(".turning-page");

    if (!page) return;

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

    const frontSticker = page.querySelector(".front .sticker");
    const backSticker = page.querySelector(".back .sticker");

    let stickerNumber = 0;

    page.addEventListener("click", function () {

        stickerNumber++;

        if (frontSticker) {
            frontSticker.textContent =
                stickers[stickerNumber % stickers.length];
        }

        if (backSticker) {
            backSticker.textContent =
                stickers[(stickerNumber + 1) % stickers.length];
        }

        page.classList.toggle("flipped");

    });

});

