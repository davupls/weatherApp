let apikey = "";

const lat = 41.878113;
const lon = -87.629799;

async function getWeather() {
   const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apikey}`)
    const data = await response.json()
    console.log(data)

    let temperature = document.querySelector("p")

    temperature.textContent = Math.round(data.current.temp - 273.15) * 9/5 + 32;
} 

getWeather();

    