const apiKey = "cbaf23b9e77a1f8051b3b3d5e99285b8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        console.log(data); 

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        } 
        else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
         
        else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "images/drizzle.png";
        }

        else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }

    } catch (error) {
        console.error("Error fetching the weather data:", error);
        alert("Error: " + error.message);
    }

    document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name");
    }
});
