// Copy Server IP

const copyBtn = document.getElementById("copyIP");

const SERVER_IP = "Coming Soon";

copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(SERVER_IP);

    copyBtn.innerHTML = "✅ Copied!";

    setTimeout(() => {
        copyBtn.innerHTML = "📋 Copy Server IP";
    },2000);

});
