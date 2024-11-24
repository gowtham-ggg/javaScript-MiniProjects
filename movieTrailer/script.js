const watchMovie = document.getElementById("button");
const mainContainer = document.querySelector(".main");

watchMovie.addEventListener("click", () => {
    mainContainer.style.display = "none";

    const moviePopup = document.createElement("div");
    moviePopup.classList.add("movie");
    moviePopup.innerHTML = `
        <a class="close">X</a>
        <video controls preload="metadata" src="video.mp4">
            Your browser doesn't support this format
        </video>
    `;
    document.body.appendChild(moviePopup);
    const closeButton = moviePopup.querySelector(".close");
    closeButton.addEventListener("click", () => {
        moviePopup.remove();
        mainContainer.style.display = "block";
    });
});
