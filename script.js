
$( ".content2 > .change_color" ).each(function(){
    $(this).click(function(){
    if($(this).css("background-color")==="rgb(144, 172, 247)"){
       
    }
    else{
        $( ".content2 > .change_color" ).css("background-color","unset")
        $(this).css("background-color","rgb(144, 172, 247)")
    }
    })

  });

const wrapper = document.querySelector("#wrapper");
const wIcon = document.querySelector("div.icon");
const infoTxt = document.querySelector(".search-input");
const inputField = document.querySelector("input");

const weatherPart = wrapper.querySelector(".container2");
const weatherPart2 = wrapper.querySelector(".container3");


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

    $.getJSON( "http://api.openweathermap.org/data/2.5/find?q="+inputField.value+"&appid=caba72153195e76e835b0e35a82e4edb", function( data ) {
        if(data.count == 1){
            $('.icon-content3 > i').removeClass();
            $(".error2 , .error3, .error4 ").empty();
        }
        else if(data.count == 2 ){
            $('.icon-content3 > i').removeClass();
            $(".error3, .error4 ").empty();
        }
      
        else if(data.count == 3){
            $('.icon-content3 > i').removeClass();
            $(".error4 ").empty();
        }
        else ;
    //o thu 2
    var tempday2 = data.list[1].main.temp;
    var teminday2 = data.list[1].main.temp_min;
    var weatherday2 = data.list[1].weather[0].description;
    weatherPart2.querySelector(".content2-2 .weather-content2").innerText = weatherday2;    
    weatherPart2.querySelector(".content2-2 .temp_c span").innerText = Math.floor(tempday2 - 273.15)+"°C";
    weatherPart2.querySelector(".content2-2 .temp_c2 span").innerText = Math.floor(teminday2 - 273.15)+"°C";
    $('.content2-2 .icon-content3 > i').removeClass();
    if((weatherPart2.querySelector(".content2-2 .temp_c span").innerText).slice(0,length-2) < 30){
        $(".content2-2 .icon-content3 > i").toggleClass("error2 fa-solid fa-cloud");
    }
    else if((weatherPart2.querySelector(".content2-2 .temp_c span").innerText).slice(0,length-2) > 30){
        $(".content2-2 .icon-content3 > i").toggleClass("error2 fa-regular fa-sun");}


    //o thu 3    
    var tempday3 = data.list[2].main.temp;
    var teminday3 = data.list[2].main.temp_min;
    var weatherday3 = data.list[2].weather[0].description;
    weatherPart2.querySelector(".content2-3 .weather-content2").innerText = weatherday3;    
    weatherPart2.querySelector(".content2-3 .temp_c span").innerText = Math.floor(tempday3 - 273.15)+"°C";
    weatherPart2.querySelector(".content2-3 .temp_c2 span").innerText = Math.floor(teminday3 - 273.15)+"°C";
    $('.content2-3 .icon-content3 > i').removeClass();
    if((weatherPart2.querySelector(".temp_c span").innerText).slice(0,length-2) < 30){
        $(".content2-3 .icon-content3 > i").toggleClass("error3 fa-solid fa-cloud");
    }
    else if((weatherPart2.querySelector(".temp_c span").innerText).slice(0,length-2) > 30){
        $(".content2-3 .icon-content3 > i").toggleClass("error3 fa-regular fa-sun");}

        
     //o thu 4   
     var tempday4 = data.list[3].main.temp;
     var teminday4 = data.list[3].main.temp_min;
     var weatherday4 = data.list[3].weather[0].description;
     weatherPart2.querySelector(".content2-4 .weather-content2").innerText = weatherday4;    
     weatherPart2.querySelector(".content2-4 .temp_c span").innerText = Math.floor(tempday4 - 273.15)+"°C";
     weatherPart2.querySelector(".content2-4 .temp_c2 span").innerText = Math.floor(teminday4 - 273.15)+"°C";
     $('.content2-4 .icon-content3 > i').removeClass();
     if((weatherPart2.querySelector(".temp_c span").innerText).slice(0,length-2) < 30){
         $(".content2-4 .icon-content3 > i").toggleClass("error4 fa-solid fa-cloud");
     }
     else if((weatherPart2.querySelector(".temp_c span").innerText).slice(0,length-2) > 30){
         $(".content2-4 .icon-content3 > i").toggleClass("error4 fa-regular fa-sun");}
        
  });

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
    infoTxt.classList.add("pending");
    fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch(() =>{
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
        const {temp, feels_like, humidity,pressure,temp_min} = info.main;
        const {speed} = info.wind;

        //olon
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


        //o thu nhat
        weatherPart2.querySelector(".content2-1 .weather-content2").innerText = description;    
        weatherPart2.querySelector(".temp_c span").innerText = Math.floor(temp)+"°C";
        weatherPart2.querySelector(".temp_c2 span").innerText = Math.floor(temp_min)+"°C";
        $('.content2-1 .icon-content2 > i').removeClass();
        if((weatherPart2.querySelector(".temp_c span").innerText).slice(0,length-2) < 30){
            $(".content2-1 .icon-content2 > i").toggleClass("fa-solid fa-cloud");
        }
        else if((weatherPart2.querySelector(".temp_c span").innerText).slice(0,length-2) > 30){
            $(".content2-1 .icon-content2 > i").toggleClass("fa-regular fa-sun");}
          
    
    }
}








$(document).ready(function() {
    requestApi("can tho");
});




//xu li ngay
var day = new Date(); 
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday"];


var a= (days[day.getDay()]); 
var b= (days[day.getDay()+1]); 
var c= (days[day.getDay()+2]); 
var d= (days[day.getDay()+3]); 


var datetime =  a.substring(0,3) + " " + day.getDate()
var datetime2 = b.substring(0,3) + " "+ (day.getDate() + 1);
var datetime3 = c.substring(0,3) + " "+  (day.getDate() + 2);
var datetime4 = d.substring(0,3) + " "+ (day.getDate() + 3);

weatherPart2.querySelector(".content2-1 span").innerText =  datetime;
weatherPart2.querySelector(".content2-2 span").innerText =  datetime2;
weatherPart2.querySelector(".content2-3 span").innerText =  datetime3;
weatherPart2.querySelector(".content2-4 span").innerText =  datetime4;


