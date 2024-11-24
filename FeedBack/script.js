const emojis = document.querySelectorAll(".emoji");
const sendButton = document.getElementById("button");
let selectedFeedback = "";

emojis.forEach((emoji) => {
    emoji.addEventListener("click", () => {
        emojis.forEach((e) => e.classList.remove("selected"));
        emoji.classList.add("selected");

        selectedFeedback = emoji.querySelector("h4").innerText;
    });
});

sendButton.addEventListener("click", () => {
    if (selectedFeedback) {
        document.body.innerHTML = `
        <div class="thank-you">
            <h2>Thank you!</h2>
            <h3>Feedback: ${selectedFeedback}</h3>
            <p>We'll use your feedback to improve our customer support.</p>
        </div>
        `;
    } 
});
