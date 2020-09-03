let apikey = "";

let Xmas95 = new Date;
let weekday = Xmas95.getDay();
let month = Xmas95.getMonth();
let options = {
    weekday : "long",
    month : "long"
};


const lat = 41.878113;
const lon = -87.629799;

async function getWeather() {
   const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apikey}`)
    const data = await response.json()
    console.log(data)

    let temperature = document.querySelector(".detail__temp")

    temperature.textContent = Math.round(data.current.temp - 273.15) * 9/5 + 32;
} 

getWeather();

    console.log(new Intl.DateTimeFormat("en-US", options).format(Xmas95))
    // console.log(new Intl.DateTimeFormat("en-US", options[1]).format(Xmas95))
    // console.log(date.getMonth())