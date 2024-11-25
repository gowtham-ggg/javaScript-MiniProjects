const getWeather = document.getElementById("button");
const main = document.querySelector(".main");
const api = "14cb906d663854ccf8869d949e791146";

getWeather.addEventListener("click", async () => {
    const city = document.getElementById("input").value.trim();

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const existingDetails = document.querySelector(".sub-container");
    if (existingDetails) {
        existingDetails.remove();
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found or API error.");
        }

        const data = await response.json();

        const subContainer = document.createElement("div");
        subContainer.classList.add("sub-container");

        const temp = document.createElement("div");
        temp.classList.add("details");
        temp.innerText = `Temperature: ${data.main.temp} °C`;

        const rain = document.createElement("div");
        rain.classList.add("details");
        const rainInfo = data.rain ? `${data.rain["1h"]} mm` : "0 mm";
        rain.innerText = `Rain: ${rainInfo}`;

        const wind = document.createElement("div");
        wind.classList.add("details");
        wind.innerText = `Wind speed: ${data.wind.speed} km/h`;

        subContainer.appendChild(temp);
        subContainer.appendChild(rain);
        subContainer.appendChild(wind);

        main.appendChild(subContainer);
    } catch (error) {
        alert(error.message);
    }
});
