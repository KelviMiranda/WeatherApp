const apiKey = "f5dc0fccd903dee9b9e6cc5b8de64a2b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityEl = document.querySelector(".city");
const tempeEl =  document.querySelector(".temp");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =  document.querySelector(".weather-icon");
const weatherEl = document.querySelector(".weather");

async function checkWeather(city){
    try{
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);
        cityEl.innerHTML = data.name;
        tempeEl.innerHTML = Math.round(data.main.temp) + "ºC";
        humidityEl.innerHTML = `${data.main.humidity} %`;
        windEl.innerHTML = `${data.wind.speed} Km/h`;

        switch(data.weather[0].main){
            case "Clouds":
                weatherIcon.src = "images/clouds.png"
            break;
            case "Clear":
                weatherIcon.src = "images/clear.png";
            break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
            break;

            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
            break;

            case "Mist":
                weatherIcon.src = "images/mist.png";
            break;
        }


        weatherEl.classList.add('showWeather')
        }
    catch(error){
        document.querySelector(".error").innerHTML = "City name Invalid";
        weatherEl.classList.remove('showWeather')
    }
}



/* Event Listenner */
searchBtn.addEventListener("click", ()=>{
    setTimeout(()=>{
        checkWeather(searchBox.value);
    }, 2000)
    
});