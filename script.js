
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
        $(".search-input").css("visibility","hidden");
       
    }
  });


  $(".search-input ").blur(function(){  
      if($(".search-input").innerText==undefined){
        
        $(".search-input").css("visibility","hidden");
    }  
});  



inputField.addEventListener("keyup", e =>{
 if(e.key == "Enter" && inputField.value != ""){
    $('.refresh').click(function() {
        inputField.value= (weatherPart.querySelector(".location span").innerText).slice(0,length-4);
    });
     $.ajax({
            url:  "https://api.openweathermap.org/data/2.5/weather?q="+inputField.value+"&appid=caba72153195e76e835b0e35a82e4edb",
            dataType: 'json',
            success: function(data){
                //big temp
            var city = data.name;
            var country = data.sys.country;
            var description= data.weather[0].description;
            var { feels_like, humidity,pressure} = data.main;
            var {speed} = data.wind;
         
       
           
            weatherPart.querySelector(".weather").innerText = description;
            weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
            weatherPart.querySelector(".tempe span").innerText = Math.floor(feels_like- 273.15)+"°C";
            weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
            weatherPart.querySelector(".wind-power span").innerText = `${speed} km/h`;
            weatherPart.querySelector(".press span").innerText = `${pressure} mb`;
                const lat = data.coord.lat;
                const lon = data.coord.lon;

                if((weatherPart.querySelector(".temperature span").innerText).slice(0,length-2) < 30){
                    $(".icon > i").toggleClass("fa-solid fa-cloud");
                }
                else if((weatherPart.querySelector(".temperature span").innerText).slice(0,length-2) >= 30)
                    $(".icon > i").toggleClass("fa-regular fa-sun");    
     $.getJSON( "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=caba72153195e76e835b0e35a82e4edb", function( data ) {
   
    //o thu nhat
    var tempday1 = data.daily[0].temp.day;
    var teminday1 = data.daily[0].temp.min;
    var weatherday1 = data.daily[0].weather[0].main;              
    weatherPart2.querySelector(".content2-1 .weather-content2").innerText = weatherday1;    
    weatherPart2.querySelector(".temp_c span").innerText =Math.floor(tempday1 - 273.15)+"°C";
    weatherPart2.querySelector(".temp_c2 span").innerText =Math.floor(teminday1 - 273.15)+"°C";
        $('.content2-1 .icon-content2 > i').removeClass();
        if((weatherPart2.querySelector(".temp_c span").innerText).slice(0,length-2) < 30){
            $(".content2-1 .icon-content2 > i").toggleClass("fa-solid fa-cloud");
        }
        else if((weatherPart2.querySelector(".temp_c span").innerText).slice(0,length-2) >= 30){
            $(".content2-1 .icon-content2 > i").toggleClass("fa-regular fa-sun");}
    //temp lon
    weatherPart.querySelector(".temperature span").innerText = Math.floor(tempday1 - 273.15)+"°C";
    $('.icon > i').removeClass();
    if((weatherPart.querySelector(".temperature span").innerText).slice(0,length-2) < 30){
        $(".icon > i").toggleClass("fa-solid fa-cloud");
    }
    else if((weatherPart.querySelector(".temperature span").innerText).slice(0,length-2) >= 30)
        $(".icon > i").toggleClass("fa-regular fa-sun");
        
    //o thu 2
    var tempday2 = data.daily[1].temp.day;
    var teminday2 = data.daily[1].temp.min;
    var weatherday2 = data.daily[1].weather[0].main;
    weatherPart2.querySelector(".content2-2 .weather-content2").innerText = weatherday2;    
    weatherPart2.querySelector(".content2-2 .temp_c span").innerText = Math.floor(tempday2 - 273.15)+"°C";
    weatherPart2.querySelector(".content2-2 .temp_c2 span").innerText = Math.floor(teminday2 - 273.15)+"°C";
    $('.content2-2 .icon-content3 > i').removeClass();
    if((weatherPart2.querySelector(".content2-2 .temp_c span").innerText).slice(0,length-2) < 30){
        $(".content2-2 .icon-content3 > i").toggleClass("error2 fa-solid fa-cloud");
    }
    else if((weatherPart2.querySelector(".content2-2 .temp_c span").innerText).slice(0,length-2) >= 30){
        $(".content2-2 .icon-content3 > i").toggleClass("error2 fa-regular fa-sun");}


    //o thu 3    
    var tempday3 = data.daily[2].temp.day;
    var teminday3 = data.daily[2].temp.min;
    var weatherday3 = data.daily[2].weather[0].main;
    weatherPart2.querySelector(".content2-3 .weather-content2").innerText = weatherday3;    
    weatherPart2.querySelector(".content2-3 .temp_c span").innerText = Math.floor(tempday3 - 273.15)+"°C";
    weatherPart2.querySelector(".content2-3 .temp_c2 span").innerText = Math.floor(teminday3 - 273.15)+"°C";
    $('.content2-3 .icon-content3 > i').removeClass();
    if((weatherPart2.querySelector(".temp_c span").innerText).slice(0,length-2) < 30){
        $(".content2-3 .icon-content3 > i").toggleClass("error3 fa-solid fa-cloud");
    }
    else if((weatherPart2.querySelector(".temp_c span").innerText).slice(0,length-2) >= 30){
        $(".content2-3 .icon-content3 > i").toggleClass("error3 fa-regular fa-sun");}

        
     //o thu 4   
     var tempday4 = data.daily[3].temp.day;
     var teminday4 = data.daily[3].temp.min;
     var weatherday4 = data.daily[3].weather[0].main;
     weatherPart2.querySelector(".content2-4 .weather-content2").innerText = weatherday4;    
     weatherPart2.querySelector(".content2-4 .temp_c span").innerText = Math.floor(tempday4 - 273.15)+"°C";
     weatherPart2.querySelector(".content2-4 .temp_c2 span").innerText = Math.floor(teminday4 - 273.15)+"°C";
     $('.content2-4 .icon-content3 > i').removeClass();
     if((weatherPart2.querySelector(".temp_c span").innerText).slice(0,length-2) < 30){
         $(".content2-4 .icon-content3 > i").toggleClass("error4 fa-solid fa-cloud");
     }
     else if((weatherPart2.querySelector(".temp_c span").innerText).slice(0,length-2) >= 30){
         $(".content2-4 .icon-content3 > i").toggleClass("error4 fa-regular fa-sun");}
        
        // swap small temp
         $(".tem_f").click(function(){
            $(".tem_f").css("opacity","unset")
            $(".tem_c").css("opacity","0.6")
            weatherPart.querySelector(".temperature span").innerText = Math.floor((tempday1 - 273.15)* 1.8000+ 32)+"°F";
            weatherPart2.querySelector(".temp_c span").innerText =Math.floor((tempday1 - 273.15)* 1.8000+ 32)+"°F";
            weatherPart2.querySelector(".temp_c2 span").innerText =Math.floor((teminday1 - 273.15)* 1.8000+ 32)+"°F";
            weatherPart2.querySelector(".content2-2 .temp_c span").innerText = Math.floor((tempday2 - 273.15)* 1.8000+ 32)+"°F";
            weatherPart2.querySelector(".content2-2 .temp_c2 span").innerText = Math.floor((teminday2 - 273.15)* 1.8000+ 32)+"°F";
            weatherPart2.querySelector(".content2-3 .temp_c span").innerText = Math.floor((tempday3 - 273.15)* 1.8000+ 32)+"°F";
            weatherPart2.querySelector(".content2-3 .temp_c2 span").innerText = Math.floor((teminday3 - 273.15)* 1.8000+ 32)+"°F";
            weatherPart2.querySelector(".content2-4 .temp_c span").innerText = Math.floor((tempday4 - 273.15)* 1.8000+ 32)+"°F";
            weatherPart2.querySelector(".content2-4 .temp_c2 span").innerText = Math.floor((teminday4 - 273.15)* 1.8000+ 32)+"°F";  
          })
        
          $(".tem_c").click(function(){
            $(".tem_c").css("opacity","unset")
            $(".tem_f").css("opacity","0.6")
            weatherPart.querySelector(".temperature span").innerText = Math.floor(tempday1 - 273.15)+"°C";
            weatherPart2.querySelector(".temp_c span").innerText =Math.floor(tempday1 - 273.15)+"°C";
            weatherPart2.querySelector(".temp_c2 span").innerText =Math.floor(teminday1 - 273.15)+"°C";
            weatherPart2.querySelector(".content2-2 .temp_c span").innerText = Math.floor(tempday2 - 273.15)+"°C";
            weatherPart2.querySelector(".content2-2 .temp_c2 span").innerText = Math.floor(teminday2 - 273.15)+"°C";
            weatherPart2.querySelector(".content2-3 .temp_c span").innerText = Math.floor(tempday3 - 273.15)+"°C";
            weatherPart2.querySelector(".content2-3 .temp_c2 span").innerText = Math.floor(teminday3 - 273.15)+"°C";
            weatherPart2.querySelector(".content2-4 .temp_c span").innerText = Math.floor(tempday4 - 273.15)+"°C";
            weatherPart2.querySelector(".content2-4 .temp_c2 span").innerText = Math.floor(teminday4 - 273.15)+"°C"; 
            

          })
          
                 });
            }
           
        })     
        error: {
            weatherPart.querySelector(".location span").innerText  = `${inputField.value} isn't a valid city name`;
            weatherPart.querySelector(".temperature span").innerText = "";
            weatherPart.querySelector(".weather").innerText =  "";
            weatherPart.querySelector(".tempe span").innerText = "";
            weatherPart.querySelector(".humidity span").innerText = "";
            weatherPart.querySelector(".wind-power span").innerText =  "";
            weatherPart.querySelector(".press span").innerText =  "";
            weatherPart2.querySelector(".content2-4 .weather-content2").innerText = "";    
            weatherPart2.querySelector(".content2-4 .temp_c span").innerText = "";
            weatherPart2.querySelector(".content2-4 .temp_c2 span").innerText = "";
            weatherPart2.querySelector(".content2-3 .weather-content2").innerText = "";    
            weatherPart2.querySelector(".content2-3 .temp_c span").innerText = "";
            weatherPart2.querySelector(".content2-3 .temp_c2 span").innerText = "";
            weatherPart2.querySelector(".content2-2 .weather-content2").innerText = "";    
            weatherPart2.querySelector(".content2-2 .temp_c span").innerText = "";
            weatherPart2.querySelector(".content2-2 .temp_c2 span").innerText = "";
            weatherPart2.querySelector(".content2-1 .weather-content2").innerText = "";    
            weatherPart2.querySelector(".content2-1 .temp_c span").innerText ="";
            weatherPart2.querySelector(".content2-1 .temp_c2 span").innerText = "";
            $('.content2-3 .icon-content3 > i').removeClass();
            $('.content2-2 .icon-content3 > i').removeClass();
            $('.content2-4 .icon-content3 > i').removeClass();
            $('.content2-1 .icon-content2 > i').removeClass();
            $('.icon > i').removeClass();
        }
        done: {  
        inputField.value="";
    }
    }

    
});
 
window.addEventListener("keyup", (e) => {
    if(e.key == "Enter"){
        if(($(".search-input").css("visibility")) === "hidden"){
            $(".search-input").css("visibility","unset");
            $(".search-input").focus();
        }
        else{
            $(".search-input").css("visibility","hidden");
           
        }   
}
});






//xu li ngay
var day = new Date(); 
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday"];


var a= (days[day.getDay()]); 
var b= (days[day.getDay()+1]); 
var c= (days[day.getDay()+2]); 
var d= (days[day.getDay()+3]); 

var nextDay = new Date(day);
nextDay.setDate(day.getDate() + 1);
var next2Day = new Date(day);
next2Day.setDate(day.getDate() + 2);
var next3Day = new Date(day);
next3Day.setDate(day.getDate() + 3);


var datetime =  a.substring(0,3) + " " + day.getDate()
var datetime2 = b.substring(0,3) + " "+ nextDay.getDate();
var datetime3 = c.substring(0,3) + " "+ next2Day.getDate();
var datetime4 = d.substring(0,3) + " "+ next3Day.getDate();


weatherPart2.querySelector(".content2-1 span").innerText =  datetime;
weatherPart2.querySelector(".content2-2 span").innerText =  datetime2;
weatherPart2.querySelector(".content2-3 span").innerText =  datetime3;
weatherPart2.querySelector(".content2-4 span").innerText =  datetime4;




