$(".search").click(function(){
    if(($(".search-input").css("visibility")) === "hidden"){
        $(".search-input").css("visibility","unset");
    }
    else{
        $(".search-input").css("visibility","hidden");
    }
  });



$('.refresh').click(function() {
    location.reload();
});


$( ".content2 > .test" ).each(function(){
    $(this).click(function(){
    if($(this).css("background-color")==="rgb(144, 172, 247)"){
       
    }
    else{
        $( ".content2 > .test" ).css("background-color","unset")
        $(this).css("background-color","rgb(144, 172, 247)")
    }
})
//    $(".test").css("background-color","rgb(144, 172, 247)")
 
  });