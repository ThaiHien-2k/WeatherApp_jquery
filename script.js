
$( ".content2 > .test" ).each(function(){
    $(this).click(function(){
    if($(this).css("background-color")==="rgb(144, 172, 247)"){
       
    }
    else{
        $( ".content2 > .test" ).css("background-color","unset")
        $(this).css("background-color","rgb(144, 172, 247)")
    }
    })

  });

  //
const wrapper = document.querySelector("#wrapper");
const wIcon = document.querySelector("div.icon");
const infoTxt = document.querySelector(".search-input");
const inputField = document.querySelector("input");

const weatherPart = wrapper.querySelector(".container2");


$(".search").click(function(){
    
    if(($(".search-input").css("visibility")) === "hidden"){
        $(".search-input").css("visibility","unset");
        $(".search-input").focus();
    }
    else{
        requestApi(inputField.value);
        $(".search-input").css("visibility","hidden");
        
    }
  });


  $(".search-input ").blur(function(){  
      if($(".search-input").innerText==undefined){
        
        $(".search-input").css("visibility","hidden");
        requestApi(inputField.value); 
    }  
});  


  $('.refresh').click(function() {
    let a =(weatherPart.querySelector(".location span").innerText).slice(0,length-4);
    requestApi(a);
});


let api;

inputField.addEventListener("keyup", e =>{
    if(e.key == "Enter" && inputField.value != ""){
        requestApi(inputField.value);
    }
});


function requestApi(city){
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=caba72153195e76e835b0e35a82e4edb`;
    fetchData();
}

function onSuccess(position){
    const {latitude, longitude} = position.coords;
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=caba72153195e76e835b0e35a82e4edb`;
    fetchData();
}

function onError(error){
    infoTxt.innerText = error.message;
    infoTxt.classList.add("error");
}

function fetchData(){
    infoTxt.innerText = "Getting weather details...";
    infoTxt.classList.add("pending");
    fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch(() =>{
        infoTxt.innerText = "Something went wrong";
        infoTxt.classList.replace("pending", "error");
    });
}

function weatherDetails(info){
    if(info.cod == "404"){
        infoTxt.classList.replace("pending", "error");
        weatherPart.querySelector(".location span").innerText  = `${inputField.value} isn't a valid city name`;
    }else{
        const city = info.name;
        const country = info.sys.country;
        const {description, id} = info.weather[0];
        const {temp, feels_like, humidity,pressure} = info.main;
        const {speed} = info.wind;
        
        weatherPart.querySelector(".temperature span").innerText = Math.floor(temp)+"°C";
        weatherPart.querySelector(".weather").innerText = description;
        weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
        weatherPart.querySelector(".tempe span").innerText = Math.floor(feels_like);
        weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
        weatherPart.querySelector(".wind-power span").innerText = `${speed} km/h`;
        weatherPart.querySelector(".press span").innerText = `${pressure} mb`;
        infoTxt.classList.remove("pending", "error");
        infoTxt.innerText = "";
        inputField.value = "";
        wrapper.classList.add("active");
        $('.icon > i').removeClass();
        if((weatherPart.querySelector(".temperature span").innerText).slice(0,length-2) < 30){
            $(".icon > i").toggleClass("fa-solid fa-cloud");
        }
        else if((weatherPart.querySelector(".temperature span").innerText).slice(0,length-2) > 30)
            $(".icon > i").toggleClass("fa-regular fa-sun");
    }
}


$(document).ready(function() {
    requestApi("can tho");
});




