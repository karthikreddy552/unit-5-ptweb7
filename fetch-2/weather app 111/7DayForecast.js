

function searchCity() {
    const cityName = document.getElementById("cityName").value;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${`83cf9e860ed66ee296fe2fbfc461c6e5`}&units=metric`;
    document.getElementById("dispCityName").textContent = cityName;
    fetch(url).then(resp => resp.json())
        .then(data => {
            for (let i = 0; i < 7; i++) {
                document.getElementById("max-temp" + (i + 1)).innerHTML = `${data.list[i].main.temp_max}°C`;
            }
            for (let i = 0; i < 7; i++) {
                document.getElementById("min-temp" + (i + 1)).innerHTML = `${data.list[i].main.temp_min}°C`;
            }
            for (let i = 0; i < 7; i++) {
                document.getElementById("image" + (i + 1)).src = "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
            }
            console.log(data);
        }).catch(err => alert("something went wrong"));
    
    
        for (let i = 0; i < 7; i++){
            document.getElementById("heading" + (i + 1)).innerHTML = weekName[displayDate(i+1)];
        }
}
const date = new Date();
const weekName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function displayDate(day) {
    if (day + date.getDay() > 6) {
        return day + date.getDay() - 7;
    } else {
        return day + date.getDay();
    }
}
