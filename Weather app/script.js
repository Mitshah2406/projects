let api_key = `806a576f4dee62192dedfef0650934ed`;
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let locationBtn = document.getElementById('locationBtn');
let locationInput = document.getElementById('locationInput');

locationBtn.addEventListener('click',()=>{
    let coord = navigator.geolocation.getCurrentPosition();
    console.log(coord)
})