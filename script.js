/* =========================
   PLAY NOW MODAL
========================= */

const playNow = document.getElementById("playNow");
const playModal = document.getElementById("playModal");
const closeModal = document.getElementById("closeModal");


/* OPEN MODAL */

playNow.addEventListener("click", () => {

    playModal.classList.add("active");

});


/* CLOSE MODAL */

closeModal.addEventListener("click", () => {

    playModal.classList.remove("active");

});


/* CLOSE WHEN CLICKING OUTSIDE */

playModal.addEventListener("click", (event) => {

    if(event.target === playModal){

        playModal.classList.remove("active");

    }

});


/* CLOSE WITH ESCAPE KEY */

document.addEventListener("keydown", (event) => {

    if(event.key === "Escape"){

        playModal.classList.remove("active");

    }

});


/* =========================
   COPY SERVER INFORMATION
========================= */

function copyText(text, button){

    navigator.clipboard.writeText(text)
        .then(() => {

            const originalText = button.innerText;

            button.innerText = "Copied!";

            setTimeout(() => {

                button.innerText = originalText;

            },1500);

        })
        .catch(() => {

            button.innerText = "Copy failed";

            setTimeout(() => {

                button.innerText = "Copy";

            },1500);

        });

}
