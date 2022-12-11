const getWeather=(city)=>{
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3ddae38237msh4d369a39e980775p1e30bdjsn2f0554b81e06",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    document.getElementById("city").innerHTML=city
    document.getElementById("temp2").innerHTML=response.temp
    document.getElementById("humidity2").innerHTML=response.humidity
    document.getElementById("wind_speed2").innerHTML=response.wind_speed
    document.getElementById("feels_like").innerHTML=response.feels_like
    document.getElementById("humidity").innerHTML=response.humidity
    document.getElementById("min_temp").innerHTML=response.min_temp
    document.getElementById("max_temp").innerHTML=response.max_temp
    document.getElementById("sunrise").innerHTML=response.sunrise
    document.getElementById("sunset").innerHTML=response.sunset
    document.getElementById("temp").innerHTML=response.temp
    document.getElementById("wind_degrees").innerHTML=response.wind_degrees
    document.getElementById("wind_speed").innerHTML=response.wind_speed
  })
  .catch((err) => console.error(err));
}
getWeather("Delhi")
document.getElementById("submit").addEventListener("click",function(e){
    console.log(search_city.value)
    e.preventDefault()
    document.getElementById("city").innerHTML=search_city.value
    getWeather(search_city.value)
})
