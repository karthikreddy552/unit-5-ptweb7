function searchCity() {
    const cityName = document.getElementById("cityName").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${`83cf9e860ed66ee296fe2fbfc461c6e5`}&units=metric`;
    fetchUrl(url);
}

const imageObj = {
    Rain: "https://i.pinimg.com/originals/ef/30/84/ef308429e4ba90004888f18267590cbe.jpg",
    Mist: "https://image.shutterstock.com/image-vector/fog-vector-icon-can-be-260nw-2164071021.jpg",
    Haze: "https://cdn-icons-png.flaticon.com/512/1779/1779862.png",
    Clouds: "https://thumbs.dreamstime.com/b/weather-forecast-app-icon-clouds-simple-vector-illustration-167505503.jpg",
    Clear: "https://cdn-icons-png.flaticon.com/512/1247/1247109.png"
}
async function fetchUrl(url) {
    const resp = await fetch(url);
    const data = await resp.json();
    // console.log(data);
    showToUi(data);
}
function showToUi(data) {
    document.getElementById("dataContainer").innerHTML = null;
    const parentDiv = document.createElement("div");
    parentDiv.setAttribute("class", "parentDiv");
    const childDiv1 = document.createElement("div");
    childDiv1.setAttribute("class", "childDiv1");
    // const childDiv2 = document.createElement("div");
    // childDiv2.setAttribute("class", "childDiv2");
    const dateAndTime = document.createElement("p");
    dateAndTime.setAttribute("class", "dataAndTime");
    const cityName = document.createElement("h2");
    cityName.setAttribute("class", "cityName");
    cityName.textContent = `${data.name}`;
    dateAndTime.setAttribute("class", "dateAndTime");
    var date = new Date();
    dateAndTime.textContent = date.toLocaleString('default', { month: 'short' }) + " " + date.getDate() + ", " + date.getHours() + ":" + date.getMinutes(); 
    const climateAndTemp = document.createElement("div");
    climateAndTemp.setAttribute("class", "climateAndTemp");
    const climate = document.createElement("img");
    const temp = document.createElement("h2");
    if (imageObj[data.weather[0].main]) {
        climate.src = imageObj[data.weather[0].main];
    } else {
        climate.src = "https://www.gov.je/_controltemplates/15/C5.MetOfficeResponsive/images/icons/b.svg";
    }
    temp.textContent = `${data.main.temp}°C`;
    climateAndTemp.append(climate, temp);
    const displayText = document.createElement("h3");
    displayText.textContent = `Feels like ${data.main.feels_like}°C. ${data.weather[0].description}`;
    const min_temp = document.createElement("p");
    min_temp.innerHTML = `<b>Minimum Temperature: </b>${data.main.temp_min}°C`;
    const max_temp = document.createElement("p");
    max_temp.innerHTML = `<b>Maximum Temperature: </b>${data.main.temp_max}°C`;
    const speed = document.createElement("p");
    speed.innerHTML = `<b>Speed: </b>${data.wind.speed}m/s`;
    const sunrise = document.createElement("p");
    sunrise.innerHTML = `<b>Sunrise:</b> ${data.sys.sunrise}`;
    const sunset = document.createElement("p");
    sunset.innerHTML = `<b>Sunset:</b> ${data.sys.sunset}`;
    childDiv1.append(cityName,dateAndTime, climateAndTemp, displayText, min_temp, max_temp, speed, sunrise, sunset);
    parentDiv.append(childDiv1);
    document.getElementById("dataContainer").append(parentDiv);
    document.getElementById("cityName").value = null;
    document.getElementById("gmap_canvas").src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}

function getMyCurrentLocation() {
    const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
    };

    function success(pos) {
        const crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        getLongAndLat(crd.latitude, crd.longitude);
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
}

getMyCurrentLocation();
function getLongAndLat(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${`83cf9e860ed66ee296fe2fbfc461c6e5`}&units=metric`;
    fetchUrl(url);
}
