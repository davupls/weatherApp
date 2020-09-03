let apikey = "";




const lat = 41.878113;
const lon = -87.629799;

async function getWeather() {
   const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apikey}`)
    const data = await response.json()
    // console.log(data)

    let temperature = document.querySelector(".detail__temp")

    temperature.textContent = Math.round((data.current.temp - 273.15) * 9/5 + 32);
} 

getWeather();

function displayTime(){
    let Xmas95 = new Date;
    
    let weekday = () => {
        dayNum = Xmas95.getDay();
        let currentDay;

        switch (dayNum) {
            case 1 :
                currentDay = "Monday"
                break;
            case 2 :
                currentDay = "Tuesday"
                break;
            case 3 :
                currentDay = "Wednesday"
                break;
            case 4 :
                currentDay = "Thursday"
                break;
            case 5 :
                currentDay = "Friday"
                break;
            case 6 : 
                currentDay = "Saturday"
                break;
            case 7 : 
                currentDay = "Sunday"
                break;
            default:
                console.log("Something went wrong with gettting Day.")
        }

        const htmlDay = document.querySelector(".w_current__Day");
        htmlDay.textContent = currentDay;
        return currentDay;  
    }
    weekday();

    let month = () => {
        monthNum = Xmas95.getMonth();
        dayNum = Xmas95.getDay();
        let currentMonth;
        let options = {
            month: "long",
        }

        currentMonth = new Intl.DateTimeFormat("en-US", options).format(new Date);
        let cMonth =  currentMonth.slice(0,3);
        cMonth = cMonth.toUpperCase();
        const htmlMonth = document.querySelector(".w_current__Month");
        htmlMonth.textContent = `${cMonth} ${dayNum}`;
    }
    month();

    let time = () => {
        let options = {
            hour : "numeric", minute : "numeric"
        }
        text = new Intl.DateTimeFormat("en-US", options).format(new Date);

        const htmlTime = document.querySelector(".w_current__Time");
        htmlTime.textContent = `${text}`;
    }
    time();

}


displayTime();
