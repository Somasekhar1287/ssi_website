$(document).ready(function () {

var slide_count=1;


var rect = $(".slide_1").offset();
console.log(rect.top, rect.left);

$(".slide_left_arrow").on("click",function(){
  
    $(".slide").removeClass("slide_active");
    
    $(".small_slide").removeClass("slide_activated");






    plusSlides(-1);
    
    
    scroll_bottom_slide();
    
});



$(".slide_right_arrow").on("click",function(){
    
    $(".slide").removeClass("slide_active");
    
    $(".small_slide").removeClass("slide_activated");
    plusSlides(1);

   
    scroll_bottom_slide();
});


function scroll_bottom_slide(){
    var main_slider_id;
    main_slider_id=$(".slide.slide_active").attr("id");
    

    $(".small_slide."+main_slider_id).addClass("slide_activated");
}


function animate(time){
    

    setInterval(function(){
        $(".slide_1").css({"top":"0px","left":"0px"});
        $(".slide_2").css({"top":"0px","left":"0px"});
        $(".slide_3").css({"top":"0px","left":"0px"});
        $(".slide_4").css({"top":"0px","left":"0px"});
        $(".slide_5").css({"top":"0px","left":"0px"});
        $(".slide_6").css({"top":"0px","left":"0px"});

    },time);
    
}


//var slides = document.getElementsByClassName("slide");

var slides=$(".slide");
var slideIndex = 1;
showSlides(slideIndex);

    function plusSlides(n) {
      slide_count+=n;
      
      showSlides((slideIndex += n));
      
    }

    var current_slide_id;
    if($(".slide").hasClass('slide_active')){
        current_slide_id=$(".slide").attr("id");
        console.log(current_slide_id);
    }
    var slide_i;
function showSlides(n) {
    var i;
    
    
    
    if (n < 1) {
      slideIndex = slides.length;
    }else  if(n>slides.length){
        slideIndex=1;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }


    
    
    slides.eq(slideIndex - 1).css({"display":"block"});
    var current_slide=$(".slide").eq(slideIndex-1).attr("id");
    console.log((current_slide));
    
    
    

    $(".slide").eq(slideIndex-1).addClass("slide_active");
    if($(".slide").hasClass('slide_active')){
        current_slide_id=$(".slide").attr("id");
            
    }





    /*
    
    if($(".slide").hasClass("slide_active")){
        slide_i=$(".slide").attr("slide");
        console.log(slide_i);
    }
    
    if($(".small_slide").hasClass("."+slide_i)){
        $(this).css({"width":"124px","height":"162px"});
        $(this).addClass("slide_active");
    }
    */

   
  }
});