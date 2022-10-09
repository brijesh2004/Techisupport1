// const { declaredLayoutFile } = require("express-hbs");
const cityName = document.getElementById('cityName');
const submitBtn= document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const day = document.getElementById("day");
const today_date1 = document.getElementById("today_date1");
const month = document.getElementById("month");
const da = ["Sunday ", "Monday" , "Tuesday "," Wednesday ", "Thursday","Friday" ," Saturday"];
const mon = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const date = new Date();
let days=date.getDay();

day.innerHTML=da[days];
today_date1.innerHTML =date.getDate();
month.innerHTML=mon[date.getMonth()];
async function getInfo(event) {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `Please Enter The City Name`;
  }
  else {
    try {
      const city_name = document.getElementById('city_name');
      const val = document.getElementById('val');
      const temp_status = document.getElementById('temp_status');
      const sup =document.getElementById("sup");
      const C =document.getElementById("C");
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&&appid=676ca47c6dd5253600058fb26b3f8490`;
      const response = await fetch(url);
      const data = await response.json();
      // array of an object
      const arrData = [data];
      sup.innerHTML="o";
      C.innerHTML="C";
      // console.log(arrData[0].main.temp)
      city_name.innerHTML = `${arrData[0].name} , ${arrData[0].sys.country}`;
      val.innerHTML = arrData[0].main.temp;
      let status = arrData[0].weather[0].main;
      if (status == "Clouds") {
        temp_status.innerHTML = '<i class="fa fa-cloud" style="font-size:72px;color:white"></i>';
      }  else if (status =="Haze") {
        temp_status.innerHTML = "<i class='fas fa-rainbow' style='font-size:48px;color:red'></i>";
      }  else if (status == "Snow") {
        temp_status.innerHTML = '<i class="fa fa-snowflake-o" style="font-size:72px;color:black"></i>';
      }   else if (status == "Rain") {
        temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='font-size:72px;color:white'></i>";
      }   else if (status == "Wind") {
        temp_status.innerHTML = "<i class='fas fa-wind' style='font-size:72px;color:blue'></i>";
      }  else if (status == "Temperature") {
        temp_status.innerHTML = "<i class='fas fa-sun' style='font-size:72px;color:yellow'></i>";
      }   else if (status == "Clear") {
        temp_status.innerHTML = "<i class='fas fa-cloud-sun' style='font-size:72px;color:red'></i>";
      }
      else {
        temp_status.innerHTML = "<i class='fas fa-cloud-sun' style='font-size:72px;color:red'></i>";
      }

      //   temp_status.innerText = arrData[0].weather[0].main;
      //  console.log(arrData);
    }
    catch {
      city_name.innerText = `Please Enter The City Name correctly`;
    }

  }
}
submitBtn.addEventListener('click',getInfo);