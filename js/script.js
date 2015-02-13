
$(document).ready(function () {
   $(".my-calender").click(function(){
       $(".my-calender-slideshow").slideToggle("slow");
   });
   
   $(".my-calender-bottom").click(function(){
       $(".my-calender-slideshow-bottom").slideToggle("slow");
   });
});
