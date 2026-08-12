/* =========================
   PLAY NOW MODAL
========================= */

const playNow = document.getElementById("playNow");
const playModal = document.getElementById("playModal");
const closeModal = document.getElementById("closeModal");

if (playNow && playModal) {

    playNow.addEventListener("click", () => {
        playModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });

}

if (closeModal && playModal) {

    closeModal.addEventListener("click", () => {
        playModal.classList.remove("active");
        document.body.style.overflow = "";
    });

}


/* Close when clicking outside */

if (playModal) {

    playModal.addEventListener("click", (event) => {

        if (event.target === playModal) {

            playModal.classList.remove("active");

            document.body.style.overflow = "";
        }

    });

}


/* Close with ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && playModal) {

        playModal.classList.remove("active");

        document.body.style.overflow = "";
    }

});


/* =========================
   COPY IP
========================= */

function copyText(text, button) {

    navigator.clipboard.writeText(text).then(() => {

        const originalText = button.innerText;

        button.innerText = "✓ Copied!";

        setTimeout(() => {
            button.innerText = originalText;
        }, 1500);

    }).catch(() => {

        button.innerText = "Copy failed";

        setTimeout(() => {
            button.innerText = "Copy";
        }, 1500);

    });

}
