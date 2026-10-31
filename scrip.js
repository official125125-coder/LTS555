// ==========================================
// LTS555 OFFICIAL LINKS
// ==========================================

// WhatsApp Customer Service
// WhatsApp Group / Channel menggunakan link sama
const whatsappLink =
    "https://wa.me/601121275126";


// Telegram Customer Service
const telegramLink =
    "https://t.me/LTS555GAMING";


// Telegram Channel
const telegramChannelLink =
    "https://t.me/LTS555GAMES";


// Game yang sedang dipilih
let currentGame = "";


// ==========================================
// OPEN GAME SUPPORT POPUP
// ==========================================

function showSupport(gameName) {

    currentGame = gameName;

    const popup =
        document.getElementById(
            "supportPopup"
        );

    const title =
        document.getElementById(
            "supportGameTitle"
        );

    const game =
        document.getElementById(
            "supportGameName"
        );


    if (!popup) {
        return;
    }


    if (title) {

        title.textContent =
            gameName +
            " - Khidmat Pelanggan";

    }


    if (game) {

        game.textContent =
            gameName;

    }


    popup.style.display =
        "flex";


    document.body.style.overflow =
        "hidden";

}


// ==========================================
// CLOSE POPUP
// ==========================================

function hideSupport() {

    const popup =
        document.getElementById(
            "supportPopup"
        );


    if (!popup) {
        return;
    }


    popup.style.display =
        "none";


    document.body.style.overflow =
        "";

}


// ==========================================
// WHATSAPP GAME SUPPORT
// ==========================================

function popupWhatsApp() {

    const message =
        "Hi LTS555, saya ingin bertanya mengenai " +
        currentGame +
        ".";


    const finalLink =
        whatsappLink +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        finalLink,
        "_blank",
        "noopener,noreferrer"
    );

}


// ==========================================
// TELEGRAM GAME SUPPORT
// ==========================================

function popupTelegram() {

    window.open(
        telegramLink,
        "_blank",
        "noopener,noreferrer"
    );

}


// ==========================================
// WHATSAPP GROUP / CHANNEL
// ==========================================

function openWhatsAppChannel() {

    const message =
        "Hi LTS555, saya nak joint";


    const finalLink =
        whatsappLink +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        finalLink,
        "_blank",
        "noopener,noreferrer"
    );

}


// ==========================================
// TELEGRAM CHANNEL
// ==========================================

function openTelegramChannel() {

    window.open(
        telegramChannelLink,
        "_blank",
        "noopener,noreferrer"
    );

}


// ==========================================
// CLOSE WHEN CLICK OUTSIDE
// ==========================================

const supportPopup =
    document.getElementById(
        "supportPopup"
    );


if (supportPopup) {

    supportPopup.addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                supportPopup
            ) {

                hideSupport();

            }

        }
    );

}


// ==========================================
// ESC CLOSE POPUP
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            hideSupport();

        }

    }
);


// ==========================================
// YEAR
// ==========================================

const year =
    document.getElementById(
        "year"
    );


if (year) {

    year.textContent =
        new Date().getFullYear();

}