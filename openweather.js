function connect(position) {
    //alert ('위치연결 성공');
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`위도:${lat} 경도:${lon}`);
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr}`; 
    
   
    fetch(URL).then((response) => response.json())
              .then((data)=>{
                    console.log(data.name); //지역명
                    console.log(data.weather[0].main); //날씨
                    console.log(data.main.temp); // 온도

                    name.innerHTML = data.name;
                    weather.innerHTML = data.weather[0].main;
                    temp.innerHTML = data.main.temp +' ℃';
                    wind.innerHTML = data.wind.speed;
                    const weatherIcon = json.weather[0].icon;
                    img.innerHTML = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
                    //const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
                    //img.innerHTML = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
                    // img.innerHTML = "http://api.openweathermap.org/img/w/"+$icon+".png";
                });
}


function errorConn(){
    alert('위치연결 실패');
}

let name = document.querySelector('#name');
let weather = document.querySelector('#weather');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let img = document.querySelector('#img');

// let weatherIconImg = document.querySelector('#img');
// weatherIconImg.setAttribute('src', weatherIconAdrs);




const API_KEY = 'f51421bd93a5e6e2432d7a9548483822';
navigator.geolocation.getCurrentPosition(connect, errorConn);

 
Date.prototype.yyyymmdd = function() {
    const yyyy = this.getFullYear();
    const mm = this.getMonth() < 9 ? `0${this.getMonth() + 1}` : this.getMonth()+1;
    const dd = this.getDate() < 10 ? `0${this.getDate()}` : this.getDate();
  
    return '' + yyyy + mm + dd;
  }
  
  const date = new Date();
  console.log(date);
  /* Thu Dec 15 2022 15:21:08 GMT+0900 (한국 표준시) */
  
  console.log(date.yyyymmdd());
  /* 20221215 */

date.yyyymmdd(document.querySelector('#time'));
