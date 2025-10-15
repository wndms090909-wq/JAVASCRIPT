//닐씨api 키를 저장할 변수
const API_KEY = "9dd2a79ea7377f1d587619e2252349f9";

//선택자 변수
let iconArea = document.querySelector(".icon img");
let tempArea = document.querySelector(".temp");
let descArea = document.querySelector(".description");
let placeArea = document.querySelector(".place");

//위치 정보를 가져올 함수
function getCurrentPos() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true, timeout: 1000, maximumAge: 0
        })
    })
}

//날씨 정보를 가져올 함수
async function getWeather(lat, lon) {
    // let weather = `https://api.openweathermap.org/data/3.0/onecall?${lat}&${lon}&appid=${API_KEY}`;
    let weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    let weatherInfo = await fetch(weather);
    console.log(weatherInfo);
    return weatherInfo.json();
}

//DOM에 날씨 정보 표시하는 함수
function renderWeather(data) {
    let temp = data.main.temp;
    let place = data.name;
    let des = data.weather[0].description;
    let icon = data.weather[0].icon;
    let iconUrl = ` https://openweathermap.org/img/wn/${icon}@2x.png`;

    tempArea.innerHTML = `${temp}도`;
    placeArea.innerHTML = place;
    descArea.innerHTML = des;
    iconArea.src = iconUrl;
    // iconArea.setAttribute("src", iconUrl);
    console.log(icon)
}

//초기함수
//위치를 받아오는 함수랄 호출하여 받아온 정보를
//날씨를 가져오는 함수에 매개값으로 전달하여 날씨 받아오기
//DOM에 보여주기
async function initWeather() {

    //위치정보 가져오기
    let pos = await getCurrentPos();
    // let latitude = pos.coords.latitude;
    // let longitude = pos.coords.longitude;
    let { latitude, longitude } = pos.coords;
    console.log(pos);
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);



    //위치정보를 이용한 날씨 정보 가져오기
    let weatherDate = await getWeather(latitude, longitude);
    console.log(weatherDate)
    //회면에 보여주기
    renderWeather(weatherDate);
}

initWeather();